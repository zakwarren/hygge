import * as actionTypes from "./actionTypes";
import { getImages } from "../../shared/images";
import { RANDOM } from "../../shared/categories";

export const STORAGE = "myHygge";

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
    const idString = localStorage.getItem(STORAGE);
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
      localStorage.removeItem(STORAGE);
    } else {
      const idString = JSON.stringify(selectedIds);
      localStorage.setItem(STORAGE, idString);
    }

    dispatch(setSelectedIds(selectedIds));
  };
};
