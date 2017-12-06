/* tslint:disable:object-literal-key-quotes trailing-comma */

import {
  getDefinitionID,
  mergeDefinitions,
  mergeSelectionSets,
} from "./utilities";

import { assert } from "chai";

describe("utilities.ts", () => {
  describe("getDefinitionID", () => {
    const testcases = {
      "should return field alias": {
        ast: {
          "kind": "Field",
          "name": { "kind": "Name", "value": "name" },
          "alias": { "kind": "Name", "value": "aliased" },
        },
        expected: "Field_aliased",
      },
      "should return inline fragment id": {
        ast: {
          "kind": "InlineFragment",
          "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Person" } },
        },
        expected: "InlineFragment_Person",
      },
      "should return fragmen spread id": {
        ast: {
          "kind": "FragmentSpread",
          "name": { "kind": "Name", "value": "Person" },
        },
        expected: "FragmentSpread_Person",
      },
    };

    Object.keys(testcases).forEach((testcase) => {
      it(testcase, () => {
        const { ast, expected } = testcases[testcase];
        assert.strictEqual(getDefinitionID(ast), expected);
      });
    });

    it("should return definition ID with directives", () => {
      const directivesAST = {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "name",
        },
        "arguments": [],
        "directives": [
          {
            "kind": "Directive",
            "name": {
              "kind": "Name",
              "value": "include",
            },
            "arguments": [
              {
                "kind": "Argument",
                "name": {
                  "kind": "Name",
                  "value": "if",
                },
                "value": {
                  "kind": "Variable",
                  "name": {
                    "kind": "Name",
                    "value": "withFriends",
                  },
                },
              }
            ],
          },
          {
            "kind": "Directive",
            "name": {
              "kind": "Name",
              "value": "include",
            },
            "arguments": [
              {
                "kind": "Argument",
                "name": {
                  "kind": "Name",
                  "value": "if",
                },
                "value": {
                  "kind": "BooleanValue",
                  "value": true,
                },
              }
            ],
          }
        ],
        selectionSet: null,
      };
      const result = getDefinitionID(directivesAST);
      const expected = "Field_name_@include(if:$withFriends)@include(if:true)";
      assert.strictEqual(result, expected);
    });
  });
  describe("mergeDefinitions", () => {
    it("should merge definition leafs", () => {
      const astA = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "title" },
            },
          ]
        }
      };

      const astB = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "age" },
            },
          ]
        }
      };

      const expected = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "title" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "age" },
            },
          ]
        }
      };

      const result = mergeDefinitions(astA, astB);
      assert.deepEqual(result, expected);
    });

    it("should merge definition deeply", () => {
      const astA = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "title" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "partner" },
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "name" },
                  },
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "title" },
                  },
                ],
              }
            }
          ],
        }
      };

      const astB = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "age" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "partner" },
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "name" },
                  },
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "age" },
                  },
                ],
              }
            }
          ]
        }
      };

      const expected = {
        "kind": "Field",
        "name": { "kind": "Name", "value": "hero" },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "name" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "title" },
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "partner" },
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "name" },
                  },
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "title" },
                  },
                  {
                    "kind": "Field",
                    "name": { "kind": "Name", "value": "age" },
                  },
                ],
              }
            },
            {
              "kind": "Field",
              "name": { "kind": "Name", "value": "age" },
            },
          ]
        }
      };

      const result = mergeDefinitions(astA, astB);
      assert.deepEqual(result, expected);
    });

  });
});
