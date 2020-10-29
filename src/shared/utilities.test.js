import { updateObject, expandHygge } from "./utilities";

describe("shared utility functions", () => {
  describe("updateObject", () => {
    it("should return a new updated object", () => {
      const original = {
        test: "test",
        item: "test",
      };
      const newProperties = {
        new: "test",
        item: "new",
      };
      const updated = updateObject(original, newProperties);

      expect(updated).not.toEqual(original);
      expect(updated).not.toEqual(newProperties);
      expect(updated.test).toEqual(original.test);
      expect(updated.new).toEqual(newProperties.new);
      expect(updated.item).toEqual(newProperties.item);
    });
  });

  describe("expandHygge", () => {
    it("should return a new collection with the hygge with expanded state", () => {
      const original = [
        {
          id: 1,
          image: "test 1",
          attribution: "Photo by Test",
          category: "test",
          display: true,
          isExpanded: false,
        },
        {
          id: 2,
          image: "test 2",
          attribution: "Photo by Test",
          category: "test",
          display: true,
          isExpanded: false,
        },
      ];
      const updated = expandHygge(original, 1);

      expect(updated).not.toEqual(original);
      expect(updated[0].display).toEqual(true);
      expect(updated[0].isExpanded).toEqual(true);
      expect(updated[1].display).toEqual(false);
      expect(updated[1].isExpanded).toEqual(false);
    });
  });
});
