/**
 * Turn directives into a printable string.
 */
function getDirectivesID(directives) {
  let id = "";
  directives.forEach((directive) => {
    id += `@${directive.name.value}(`;
    let first = true;
    directive.arguments.forEach((arg) => {
      if (!first) {
        id += ",";
      }
      first = false;
      const value = arg.value.kind === "Variable"
        ? `$${arg.value.name.value}`
        : arg.value.value;
      id += `${arg.name.value}:${value}`;
    });
    id += ")";
  });
  return id;
}

/**
 * If two definitions have the same id, they can be merged.
 */
export function getDefinitionID(definition) {

  // Only merge when directives are exactly the same.
  const trailing = definition.directives.length
    ? `_${getDirectivesID(definition.directives)}`
    : "";

  switch (definition.kind) {
    case "FragmentSpread":
      return `FragmentSpread_${definition.name.value}`;
    case "Field":
      return `Field_${definition.alias ? definition.alias.value : definition.name.value}${trailing}`;
    case "InlineFragment":
      return `InlineFragment_${definition.typeCondition.name.value}${trailing}`;
    default:
      throw new Error(`unknown definition kind ${definition.kind}`);
  }
}

/**
 * Merge 2 definitions.
 *
 * B overwrites A if it does not have an selection set.
 * Otherwise merge selection sets.
 */
export function mergeDefinitions(a, b) {
  const name = getDefinitionID(a);

  if (!!a.selectionSet !== !!b.selectionSet) {
    throw Error(`incompatible field definition for ${name}`);
  }

  if (!a.selectionSet) {
    return b;
  }

  const selectionSet = mergeSelectionSets(a.selectionSet, b.selectionSet);

  return {
    ...b,
    selectionSet,
  };
}

/**
 * Merge selectionSets.
 */
export function mergeSelectionSets(a, b) {
  const selectionsMap = [...a.selections, ...b.selections].reduce((o, sel) => {
    const selName = getDefinitionID(sel);
    if (!(selName in o)) {
      o[selName] = sel;
      return o;
    }
    o[selName] = mergeDefinitions(o[selName], sel);
    return o;
  }, {});

  const selections = Object.keys(selectionsMap).map((key) => selectionsMap[key]);

  return {
    ...b,
    selections,
  };
}
