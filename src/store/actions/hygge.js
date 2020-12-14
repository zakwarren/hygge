import * as actionTypes from "./actionTypes";
import { getImages } from "../../shared/images";
import { RANDOM, CATEGORIES } from "../../shared/categories";

export const STORED_SELECTION = "myHygge";
export const STORED_CATEGORIES = "myCategories";

export const setCollection = (collection) => {
  return {
    type: actionTypes.SET_COLLECTION,
    collection: collection,
  };
};

export const setSelectedIds = (selectedIds) => {
  return {
    type: actionTypes.SET_SELECTED,
    selectedIds: selectedIds,
  };
};

export const getSelection = () => {
  return (dispatch) => {
    const idString = localStorage.getItem(STORED_SELECTION);
    const ids = idString ? JSON.parse(idString) : null;
    if (ids) {
      dispatch(setSelectedIds(ids));
      const collection = getImages(null, ids);
      dispatch(setCollection(collection));
    } else {
      const collection = getImages(RANDOM);
      dispatch(setCollection(collection));
    }
  };
};

export const saveSelection = (selectedIds) => {
  return (dispatch) => {
    if (selectedIds.length === 0) {
      localStorage.removeItem(STORED_SELECTION);
    } else {
      const idString = JSON.stringify(selectedIds);
      localStorage.setItem(STORED_SELECTION, idString);
    }

    dispatch(setSelectedIds(selectedIds));
  };
};

export const getCategories = () => {
  const cats = localStorage.getItem(STORED_CATEGORIES);
  const categories = cats ? cats : CATEGORIES;

  return {
    type: actionTypes.SET_CATEGORIES,
    categories: categories,
  };
};

export const setCategories = (categories) => {
  const cats = JSON.stringify(categories);
  localStorage.setItem(STORED_CATEGORIES, cats);

  return {
    type: actionTypes.SET_CATEGORIES,
    categories: categories,
  };
};
