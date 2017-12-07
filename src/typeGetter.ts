/**
 * TypeGetter which is used in `transformDocument`.
 * Passing a path should return its type.
 *
 * Examples:
 * query.users.name => String
 * query.users => User
 * query => RootQuery
 *
 * Special case `type` followed by a type name will
 * resolve starting from that type, e.g.:
 * type.User.name => String
 * type.RootQuery.users = User
 */
export type TypeGetter = (path: string) => string[];
interface ImplementingTypesMap { [type: string]: string[]; }

function getObjectType(fieldType) {
  if (["NON_NULL", "LIST"].indexOf(fieldType.kind) > -1) {
    return getObjectType(fieldType.ofType);
  }
  return fieldType.name;
}

function getFieldType(parentType, fieldName) {
  const field = parentType.fields.find((f) => f.name === fieldName);
  return getObjectType(field.type);
}

function generateImplementingTypesMap(
  introspectionResultData,
): ImplementingTypesMap {
  const typeMap: ImplementingTypesMap = {};
  introspectionResultData.__schema.types.forEach((type) => {
    if (type.kind === "UNION" || type.kind === "INTERFACE") {
      type.possibleTypes.forEach(
        (implementingType) => {
          if (!typeMap[implementingType.name]) {
            typeMap[implementingType.name] = [];
          }
          typeMap[implementingType.name].push(type.name);
        },
      );
    }
  });
  return typeMap;
}

/**
 * Create a TypeGetter using introspectionData to use in `transformDocument`.
 */
export function createTypeGetter(introspectionData): TypeGetter {
  const types = {};
  introspectionData.__schema.types.forEach((type) => types[type.name] = type);

  const result = {
    query: [introspectionData.__schema.queryType.name],
    mutation: [introspectionData.__schema.mutationType.name],
    subscription: [introspectionData.__schema.subscriptionType.name],
  };

  const implementingTypesMap = generateImplementingTypesMap(introspectionData);

  return (path) => {
    if (result[path]) {
      return result[path];
    }
    let currentPath = "";
    const parts = path.split(".");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      // Handle special path e.g. "type.ROOT_QUERY.fieldName"
      if (part === "type") {
        const type = parts[i + 1];
        const next = `type.${type}`;
        result[next] = [type];
        if (implementingTypesMap[type]) {
          result[next].push(...implementingTypesMap[type]);
        }
        currentPath = next;
        i++;
        continue;
      }

      const nextPath = currentPath ? `${currentPath}.${part}` : part;
      if (nextPath in result) {
        currentPath = nextPath;
        continue;
      }
      const fieldType = getFieldType(types[result[currentPath][0]], part);
      result[nextPath] = [fieldType];
      result[nextPath].push(...implementingTypesMap[fieldType]);
      currentPath = nextPath;
    }
    return result[path];
  };
}
