/* tslint:disable:object-literal-key-quotes trailing-comma */

import introspectionData from "../test/introspection";
import { createTypeGetter } from "./typeGetter";

import { assert } from "chai";

describe("typeGetter.ts", () => {
  describe("createTypeGetter.ts", () => {
    it("should return type", () => {
      const tg = createTypeGetter(introspectionData);

      const testcases = {
        "query": ["RootQuery"],
        "query.users": ["UserConnection"],
        "query.users.nodes": ["User"],
        "subscription": ["Subscription"],
        "subscription.commentAdded": ["Comment"],
        "subscription.commentAdded.id": ["ID"],
        "mutation": ["RootMutation"],
        "mutation.createFlag": ["CreateFlagResponse"],
        "mutation.createFlag.flag": ["FlagAction"],
        "type.Asset": ["Asset"],
        "type.Asset.settings": ["Settings"],
      };

      Object.keys(testcases).forEach((path) => {
        assert.deepEqual(tg(path), testcases[path]);
      });
    });
  });
});
