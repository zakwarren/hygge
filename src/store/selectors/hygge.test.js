import { getSelectedCount } from "./hygge";

describe("hygge selectors", () => {
  const posState = {
    hygge: { selectedIds: [1, 2] },
  };

  const negState = {
    hygge: { selectedIds: null },
  };

  it("should return the count of selected IDs", () => {
    const count = getSelectedCount(posState);
    const none = getSelectedCount(negState);

    expect(count).toEqual(2);
    expect(none).toEqual(0);
  });
});
