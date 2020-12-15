import * as actionTypes from "../actions/actionTypes";
import reducer from "./hygge";

describe("hygge reducer", () => {
  const initialState = {
    categories: null,
    allHygge: null,
    collection: null,
    selectedIds: null,
  };

  it("should return the initial state when invalid type", () => {
    const newState = reducer(initialState, { type: "test" });

    expect(newState).toEqual(initialState);
  });

  it("should set the collection", () => {
    const collection = "test";
    const newState = reducer(initialState, {
      type: actionTypes.SET_COLLECTION,
      collection: collection,
    });

    expect(newState.collection).toEqual(collection);
  });

  it("should set selected IDs", () => {
    const selectedIds = ["test"];
    const newState = reducer(initialState, {
      type: actionTypes.SET_SELECTED,
      selectedIds: selectedIds,
    });

    expect(newState.selectedIds).toEqual(selectedIds);
  });

  it("should set the categories", () => {
    const categories = ["test"];
    const newState = reducer(initialState, {
      type: actionTypes.SET_CATEGORIES,
      categories: categories,
    });

    expect(newState.categories).toEqual(categories);
  });
});
