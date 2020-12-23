import * as actionTypes from "../actions/actionTypes";
import reducer from "./app";

describe("hygge reducer", () => {
  const initialState = {
    routesHelped: {},
  };

  it("should return the initial state when invalid type", () => {
    const newState = reducer(initialState, { type: "test" });

    expect(newState).toEqual(initialState);
  });

  it("should set routesHelped", () => {
    const routesHelped = { test: "test" };
    const newState = reducer(initialState, {
      type: actionTypes.SET_NEEDS_HELP,
      routesHelped: routesHelped,
    });

    expect(newState.routesHelped).toEqual(routesHelped);
  });
});
