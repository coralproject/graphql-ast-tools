# graphql-ast-tools

[![NPM Version Widget]][npm version]
[![Build Status Widget]][build status]
[![Coverage Widget]][coverage]

`graphql-ast-tools` contains a set of methods to help simplifying a _GraphQL Document Node_ by resolving `@skip` and `@include` Directives and merging _Named Fragments_ into fields or turning them into _Inline Fragments_. The goal is to turn a complex document structure with deeply nested fragments into a simpler and shallow one that makes processing easier.

## API

```ts
/**
 * Options used in transformDocment
 */
interface TransformDocumentOptions {

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
function transformDocument(document: DocumentNode, options: TransformDocumentOptions = {}): DocumentNode
```

```ts
/**
 * TypeGetter which is used in `transformDocument`.
 * Passing a path should return its type and implementing types.
 *
 * Examples:
 * query.users.name => [String]
 * query.users => [User]
 * query.users.flagAction => [FlagAction, Action]
 * query => [RootQuery]
 *
 * Special case `type` followed by a type name will
 * resolve starting from that type, e.g.:
 * type.User.name => [String]
 * type.RootQuery.users = [User]
 */
type TypeGetter = (path: string) => string[];

function createTypeGetter(introspectionData): TypeGetter
```

```ts
/**
 * Merge 2 definitions.
 *
 * B overwrites A if it does not have an selection set.
 * Otherwise merge selection sets.
 */
function mergeDefinitions(a, b)

/**
 * Merge selectionSets.
 */
function mergeSelectionSets(a, b)
```

[npm version]: https://www.npmjs.com/package/graphql-ast-tools

[npm version widget]: https://img.shields.io/npm/v/graphql-ast-tools.svg

[build status]: https://circleci.com/gh/coralproject/graphql-ast-tools

[build status widget]: https://img.shields.io/circleci/project/github/coralproject/graphql-ast-tools.svg

[coverage]: https://codecov.io/gh/coralproject/graphql-ast-tools

[coverage widget]: https://codecov.io/gh/coralproject/graphql-ast-tools/branch/master/graph/badge.svg

