import * as actionTypes from "./actionTypes";
import * as actions from "./hygge";

describe("hygge actions", () => {
  it("should return set collection", () => {
    const collection = "test";
    const act = actions.setCollection(collection);

    expect(act.type).toEqual(actionTypes.SET_COLLECTION);
    expect(act.collection).toEqual(collection);
  });

  it("should return set selected IDs", () => {
    const selectedIds = ["test"];
    const act = actions.setSelectedIds(selectedIds);

    expect(act.type).toEqual(actionTypes.SET_SELECTED);
    expect(act.selectedIds).toEqual(selectedIds);
  });
});
