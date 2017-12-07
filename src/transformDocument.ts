import {
  DocumentNode,
} from "graphql";

import {
  getMainDefinition,
  getFragmentDefinitions,
  createFragmentMap,
  shouldInclude,
  getOperationDefinition,
} from "apollo-utilities";

import {
  getDefinitionID,
  mergeDefinitions,
} from "./utilities";

import {
  TypeGetter,
} from "./typeGetter";

/**
 * Return transformed fragment.
 */
function getFragmentOrDie(name, execContext) {
  const {
    rawFragmentMap,
    fragmentMap,
  } = execContext;

  if (!(name in fragmentMap)) {
    const fragment = rawFragmentMap[name];

    if (!fragment) {
      throw new Error(`fragment ${fragment.name.value} does not exist`);
    }

    const typeCondition = fragment.typeCondition.name.value;
    const transformed = transformDefinition(fragment, { ...execContext, variables: null }, `type.${typeCondition}`);
    fragmentMap[name] = transformed;
  }

  return fragmentMap[name];
}

/**
 * Return selections with resolved named fragments and directives.
 */
function getTransformedSelections(definition, path, gqlTypes, execContext) {
  const {
    variables,
  } = execContext;

  const selectionsMap = definition.selectionSet.selections.reduce((o, sel) => {
    if (variables && !shouldInclude(sel, variables)) {

      // Skip this entirely
      return o;
    }

    let node = null;
    let merge = false;

    if (sel.kind === "Field") {
      node = transformDefinition(sel, execContext, path);
    }
    else {

      // FragmentSpread or InlineFragment.
      node = sel.kind === "FragmentSpread"
        ? getFragmentOrDie(sel.name.value, execContext)
        : transformDefinition(sel, execContext, path);
      const typeCondition = node.typeCondition.name.value;

      // Turn NamedFragment into an InlineFragment.
      if (!gqlTypes || gqlTypes.indexOf(typeCondition) === -1 || node.directives.length) {
        node = {
          ...node,
          kind: "InlineFragment",
        };
      }
      else {
        merge = true;
      }
    }

    // Merge directly into selections.
    if (merge) {
      const nodeSelections = node.selectionSet.selections;
      nodeSelections.forEach((s) => {

        if (variables && !shouldInclude(s, variables)) {

          // Skip this entirely
          return;
        }

        const selID = getDefinitionID(s);
        if (!(selID in o)) {
          o[selID] = s;
          return;
        }

        o[selID] = mergeDefinitions(o[selID], s);
      });
    }
    else {
      const id = getDefinitionID(node);

      // Merge existing value.
      if (id in o) {
        o[id] = mergeDefinitions(o[id], node);
        return o;
      }

      o[id] = node;
    }

    return o;
  }, {});

  const selections = Object.keys(selectionsMap).map((key) => selectionsMap[key]);
  return selections;
}

/**
 * Resolve named fragments and directives in a definition.
 */
function transformDefinition(definition, execContext, path = "") {
  if (!definition.selectionSet) {
    return definition;
  }

  const { typeGetter, heuristics } = execContext;
  let nextPath = path;

  if (definition.kind === "Field") {
    const fieldName = definition.name.value;
    nextPath = `${path}.${fieldName}`;
  }
  else if (definition.kind === "InlineFragment") {
    nextPath = `type.${definition.typeCondition.name.value}`;
  }

  let type = null;

  // Save the type into our heuristics.
  if (definition.typeCondition) {
    const types = [definition.typeCondition.name.value];

    // Add parent types.
    const parentTypes = heuristics[path];
    if (parentTypes) {
      types.push(...parentTypes);
    }

    // Add known types.
    if (heuristics[nextPath]) {
      types.push(...heuristics[nextPath]);
    }

    // Deduplicate.
    const deduplicated = types.filter((t, i) => types.indexOf(t) === i);

    heuristics[nextPath] = deduplicated;
  }

  if (typeGetter) {
    type = typeGetter(nextPath);
  }

  if (!type) {
    // See if we know the type already.
    type = heuristics[nextPath];
  }

  return {
    ...definition,
    selectionSet: {
      ...definition.selectionSet,
      selections: getTransformedSelections(definition, nextPath, type, execContext),
    },
  };
}

export interface FragmentMap {
  [name: string]: DocumentNode;
}

/**
 * Options used in transformDocment
 */
export interface TransformDocumentOptions {

  // If given, transformDocument will also resolve @include and @skip directives.
  variables?: { [name: string]: any };

  // If given, transformDocument can do a better job at reducing the document.
  typeGetter?: TypeGetter;

  // If given, transformDocument will use fragments from this map. If it does
  // not exist, it will try to find it in the DocumentNode and put it into the map.
  // You can pass the same fragmentMap to multiple transformDocument operations to reduce
  // time required to process fragments.
  fragmentMap?: FragmentMap;
}

/**
 * transformDocument will resolve NamedFragments and turn them into shallow InlineFragments or if possible
 * merge them directly with Field nodes. If `options.variables` are given it also resolves @include
 * and @skip directives.
 */
export function transformDocument(document: DocumentNode, options: TransformDocumentOptions = {}): DocumentNode {
  const fragmentMap = options.fragmentMap || {};
  const fragments = getFragmentDefinitions(document);
  const operationDefinition = getOperationDefinition(document);

  let path;
  let mainDefinition = getMainDefinition(document);

  if (operationDefinition) {
    path = operationDefinition.operation;
  } else {
    // FragmentDefinition
    path = `type.${mainDefinition.typeCondition.name.value}`;

    // Use cached fragment if available.
    const name = mainDefinition.name.value;
    if (name in fragmentMap) {
      mainDefinition = fragmentMap[name];
    }
  }

  const execContext = {
    rawFragmentMap: createFragmentMap(fragments),
    fragmentMap,
    variables: options.variables,
    typeGetter: options.typeGetter || (() => null),
    heuristics: {},
  };

  return {
    kind: "Document",
    definitions: [transformDefinition(mainDefinition, execContext, path)],
  };
}
