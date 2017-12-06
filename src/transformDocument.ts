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
    const transformed = transformDefinition(fragment, execContext, `type.${typeCondition}`, typeCondition);
    fragmentMap[name] = transformed;
  }

  return fragmentMap[name];
}

/**
 * Return selections with resolved named fragments and directives.
 */
function getTransformedSelections(definition, path, gqlType, execContext) {
  const {
    variables,
  } = execContext;

  const selectionsMap = definition.selectionSet.selections.reduce((o, sel) => {
    if (variables && !shouldInclude(sel, variables)) {

      // Skip this entirely
      return o;
    }
    if (sel.kind === "Field") {
      const transformed = transformDefinition(sel, execContext, path, gqlType);
      const name = getDefinitionID(sel);

      // Merge existing value.
      if (name in o) {
        o[name] = mergeDefinitions(o[name], transformed);
        return o;
      }

      o[name] = transformed;
      return o;
    }

    // NamedFragment or InlineFragment.
    const fragment = sel.kind === "FragmentSpread"
      ? getFragmentOrDie(sel.name.value, execContext)
      : transformDefinition(sel, execContext, path, sel.typeCondition.name.value);
    const typeCondition = fragment.typeCondition.name.value;

    // Turn NamedFragment into an InlineFragment.
    if (gqlType !== typeCondition || fragment.directives.length) {
      const node = {
        ...fragment,
        kind: "InlineFragment",
      };
      const name = getDefinitionID(node);

      // Merge existing value.
      if (name in o) {
        o[name] = mergeDefinitions(o[name], node);
        return o;
      }

      o[name] = node;
      return o;
    }

    // Merge NamedFragment directly into selections.
    const fragmentSelections = fragment.selectionSet.selections;
    fragmentSelections.forEach((s) => {

      if (variables && !shouldInclude(s, variables)) {

        // Skip this entirely
        return;
      }

      const selName = getDefinitionID(s);
      if (!(selName in o)) {
        o[selName] = s;
        return;
      }

      o[selName] = mergeDefinitions(o[selName], s);
    });
    return o;
  }, {});

  const selections = Object.keys(selectionsMap).map((key) => selectionsMap[key]);
  return selections;
}

/**
 * Resolve named fragments and directives in a definition.
 */
function transformDefinition(definition, execContext, path = "", type = null) {
  if (!definition.selectionSet) {
    return definition;
  }

  const { typeGetter } = execContext;

  if (definition.kind === "Field") {
    const fieldName = definition.name.value;
    path = `${path}.${fieldName}`;

    if (typeGetter) {
      type = typeGetter(path);
    }
  }
  else if (!type && typeGetter) {
    type = definition.typeCondition
      ? definition.typeCondition.name.value
      : typeGetter(path);
  }

  return {
    ...definition,
    selectionSet: {
      ...definition.selectionSet,
      selections: getTransformedSelections(definition, path, type, execContext),
    },
  };
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
  fragmentMap?: { [name: string]: DocumentNode };
}

/**
 * transformDocument will resolve NamedFragments and turn them into shallow InlineFragments or if possible
 * merge them directly with Field nodes. If `options.variables` are given it also resolves @include
 * and @skip directives.
 */
export function transformDocument(document: DocumentNode, options: TransformDocumentOptions = {}): DocumentNode {
  const mainDefinition = getMainDefinition(document);
  const fragments = getFragmentDefinitions(document);
  const operationDefinition = getOperationDefinition(document);
  const path = operationDefinition
    ? operationDefinition.operation
    : `type.${mainDefinition.typeCondition.name.value}`;

  const execContext = {
    rawFragmentMap: createFragmentMap(fragments),
    fragmentMap: options.fragmentMap || {},
    variables: options.variables,
    typeGetter: options.typeGetter || (() => null),
  };

  return {
    kind: "Document",
    definitions: [transformDefinition(mainDefinition, execContext, path)],
  };
}
