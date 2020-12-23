import * as actionTypes from "./actionTypes";
import * as actions from "./app";

describe("app actions", () => {
  it("should return open modal and content", () => {
    const content = "test";
    const act = actions.openModal(content);

    expect(act.type).toEqual(actionTypes.OPEN_MODAL);
    expect(act.content).toEqual(content);
  });

  it("should return close modal", () => {
    const act = actions.closeModal();

    expect(act.type).toEqual(actionTypes.CLOSE_MODAL);
  });
});
