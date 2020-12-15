import * as actionTypes from "./actionTypes";
import * as actions from "./hygge";
import { CATEGORIES } from "../../shared/categories";

describe("hygge actions", () => {
  it("should return set all hygge", () => {
    const allHygge = ["test"];
    const act = actions.setAllHygge();

    expect(act.type).toEqual(actionTypes.SET_ALL_HYGGE);
    expect(act.allHygge).toEqual(allHygge);
  });

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

  it("should return get categories and the categories", () => {
    const act = actions.getCategories();

    expect(act.type).toEqual(actionTypes.SET_CATEGORIES);
    expect(act.categories).toEqual(CATEGORIES);
  });

  it("should return set categories and the categories", () => {
    const cats = { test: "test" };
    const act = actions.setCategories(cats);

    expect(act.type).toEqual(actionTypes.SET_CATEGORIES);
    expect(act.categories).toEqual(cats);
  });
});
