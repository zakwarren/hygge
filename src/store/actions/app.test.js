import * as actionTypes from "./actionTypes";
import * as actions from "./app";

describe("app actions", () => {
  it("should return set needs help and saved routes helped", () => {
    const act = actions.getNeedsHelp();

    expect(act.type).toEqual(actionTypes.SET_NEEDS_HELP);
    expect(act.routesHelped).toEqual({});
  });

  it("should return set needs help and the routes helped", () => {
    const routesHelped = { test: "a different test" };
    const act = actions.setRoutesHelped(routesHelped);

    expect(act.type).toEqual(actionTypes.SET_NEEDS_HELP);
    expect(act.routesHelped).toEqual(routesHelped);
  });
});
