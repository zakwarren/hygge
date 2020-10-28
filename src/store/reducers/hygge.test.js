import * as actionTypes from "../actions/actionTypes";
import reducer from "./hygge";

describe("hygge reducer", () => {
  const initialState = {
    collection: null,
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
});
