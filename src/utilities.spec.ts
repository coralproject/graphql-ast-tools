import {
  getDefinitionID,
} from "./utilities";

import { assert } from "chai";

/* tslint:disable:object-literal-key-quotes trailing-comma */

describe("utilities.ts", () => {
  describe("getDefinitionID", () => {
    it("should return definition ID", () => {
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
});
