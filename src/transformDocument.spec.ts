/* tslint:disable:object-literal-key-quotes trailing-comma */

import introspectionData from "../test/introspection";
import gql from "graphql-tag";
import { assert } from "chai";
import { print } from "graphql";

import { transformDocument } from "./transformDocument";

function assertEqualDocuments(a, b) {
  assert.strictEqual(print(a), print(b));
}

function transformAndAssert(a, b, options = {}) {
  const astA = gql`${a}`;
  const astB = gql`${b}`;
  const transformed = transformDocument(astA, options);
  assertEqualDocuments(transformed, astB);
}

describe("transformDocument.ts", () => {
  describe("transformDocument", () => {
    const testcases = {
      "should merge duplicated fields": {
        ast: `
          {
            user {
              firstName
              firstName
              lastName
            }
          }
        `,
        expected: `
          {
            user {
              firstName
              lastName
            }
          }
        `,
      },
      "should keep @include and @skip directives": {
        ast: `
          {
            user {
              a @include(if: false)
            }
          }
        `,
        expected: `
          {
            user {
              a @include(if: false)
            }
          }
        `,
      },
      "should resolve @include and @skip directives": {
        ast: `
          {
            user {
              a @include(if: true)
              b @include(if: false)
              c @skip(if: $b)
              d @include(if: $b)
            }
          }
        `,
        variables: {
          b: true,
        },
        expected: `
          {
            user {
              a @include(if: true)
              d @include(if: $b)
            }
          }
        `,
      },
      "should resolve nested inline fragments": {
        ast: `
          {
            user {
              ... on User {
                name
                ... on User {
                  name
                  age
                }
                ... on Hero {
                  title
                  ... on Hero {
                    title
                    name
                  }
                }
              }
            }
          }
        `,
        expected: `
          {
            user {
              ... on User {
                name
                age
                ... on Hero {
                  title
                  name
                }
              }
            }
          }
        `,
      },
      "should resolve named fragments": {
        ast: `
          {
            user {
              ... UserFragment
              ... on User {
                name
                ... UserFragment
                ... on Hero {
                  ... UserFragment
                  title
                }
              }
            }
          }
          fragment UserFragment on User {
            name
            age
          }
        `,
        expected: `
          {
            user {
              ... on User {
                name
                age
                ... on Hero {
                  name
                  age
                  title
                }
              }
            }
          }
        `,
      },
      "should transform main fragment": {
        ast: `
          fragment RootFragment on RootQuery {
            user {
              ... UserFragment
            }
          }
          fragment UserFragment on User {
            name
            age
          }
        `,
        expected: `
          fragment RootFragment on RootQuery {
            user {
              ... on User {
                name
                age
              }
            }
          }
        `,
      },
      "should utilize typegetter": {
        ast: `
            {
              user {
                ... on User {
                  name
                  ... on Hero {
                    title
                    ... on User {
                      name
                      age
                    }
                  }
                }
              }
            }
          `,
        typeMap: {
          "query.user": ["User"],
          "type.Hero": ["Hero", "User"],
        },
        expected: `
          {
            user {
              name
              ... on Hero {
                title
                name
                age
              }
            }
          }
        `,
      },
    };

    Object.keys(testcases).forEach((testcase) => {
      it(testcase, () => {
        const { ast, expected, variables, typeMap } = testcases[testcase];
        const typeGetter = typeMap ? (path) => typeMap[path] : undefined;
        transformAndAssert(ast, expected, { variables, typeGetter });
      });
    });
  });
});
