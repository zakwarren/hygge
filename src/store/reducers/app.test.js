import * as actionTypes from "../actions/actionTypes";
import reducer from "./app";

describe("hygge reducer", () => {
  const initialState = {
    isOpen: false,
    content: null,
  };

  it("should return the initial state when invalid type", () => {
    const newState = reducer(initialState, { type: "test" });

    expect(newState).toEqual(initialState);
  });

  it("should set isOpen to true and content", () => {
    const content = "test";
    const newState = reducer(initialState, {
      type: actionTypes.OPEN_MODAL,
      content: content,
    });

    expect(newState.isOpen).toEqual(true);
    expect(newState.content).toEqual(content);
  });

  it("should set isOpen to false and clear content", () => {
    const newState = reducer(initialState, { type: actionTypes.CLOSE_MODAL });

    expect(newState.isOpen).toEqual(false);
    expect(newState.content).toBeNull();
  });
});
