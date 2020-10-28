import * as actionTypes from "./actionTypes";
import * as actions from "./hygge";

describe("hygge actions", () => {
  it("should return set collection", () => {
    const act = actions.setCollection();

    expect(act.type).toEqual(actionTypes.SET_COLLECTION);
  });
});
