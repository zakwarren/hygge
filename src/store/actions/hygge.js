import * as actionTypes from "./actionTypes";
import { getImages } from "../../shared/images";
import { RANDOM } from "../../shared/categories";

export const STORAGE = "selection";

export const setCollection = (collection) => {
  return {
    type: actionTypes.SET_COLLECTION,
    collection: collection,
  };
};

export const getSelection = () => {
  return (dispatch) => {
    const idString = localStorage.getItem(STORAGE);
    const ids = idString ? JSON.parse(idString) : null;
    if (ids) {
      const collection = getImages(null, ids);
      dispatch(setCollection(collection));
    } else {
      const collection = getImages(RANDOM);
      dispatch(setCollection(collection));
    }
  };
};

export const saveSelection = (selection) => {
  return (dispatch) => {
    const ids = selection.map((item) => item.id);
    const idString = JSON.stringify(ids);
    localStorage.setItem(STORAGE, idString);

    dispatch(setCollection(selection));
  };
};
