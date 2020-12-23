import * as actionTypes from "./actionTypes";
import { filterImages, IMAGE_MAPPING } from "../../shared/images";
import { RANDOM, CATEGORIES } from "../../shared/categories";
import db, { TABLE_NAMES } from "../db";

const STORED_SELECTION = "myHygge";

export const setAllHygge = (imageMapping) => {
  return {
    type: actionTypes.SET_ALL_HYGGE,
    allHygge: imageMapping,
  };
};

const getImages = async () => {
  const storedImages = await db.table(TABLE_NAMES.images).toArray();
  const imageMapping = storedImages.length > 1 ? storedImages : IMAGE_MAPPING;
  const allHygge = filterImages(imageMapping);
  return allHygge;
};

export const getAllHygge = () => {
  return async (dispatch) => {
    const allHygge = await getImages();
    dispatch(setAllHygge(allHygge));
  };
};

export const saveNewHygge = (image, attribution, category) => {
  return async (dispatch, getState) => {
    const { allHygge } = getState().hygge;
    const allIds = allHygge.map((hygge) => hygge.id);
    const newId = allIds.length > 0 ? Math.max.apply(null, allIds) + 1 : 1;
    const updatedHygge = [
      ...allHygge,
      {
        id: newId,
        image: image,
        attribution: attribution,
        category: category,
      },
    ];

    await db.table(TABLE_NAMES.images).clear();
    await db.table(TABLE_NAMES.images).bulkAdd(updatedHygge);

    dispatch(setAllHygge(updatedHygge));
  };
};

export const removeHygge = (id) => {
  return async (dispatch, getState) => {
    const { allHygge } = getState().hygge;
    const updatedHygge = allHygge.filter((hg) => hg.id !== id);

    await db.table(TABLE_NAMES.images).clear();
    await db.table(TABLE_NAMES.images).bulkAdd(updatedHygge);

    dispatch(setAllHygge(updatedHygge));
  };
};

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
  return async (dispatch, getState) => {
    let { allHygge } = getState().hygge;
    if (!allHygge) {
      allHygge = await getImages();
    }

    const idString = localStorage.getItem(STORED_SELECTION);
    const ids = idString ? JSON.parse(idString) : null;
    if (ids) {
      dispatch(setSelectedIds(ids));
      const collection = filterImages(allHygge, null, ids);
      dispatch(setCollection(collection));
    } else {
      const collection = filterImages(allHygge, RANDOM);
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
  return async (dispatch) => {
    const cats = await db.table(TABLE_NAMES.categories).toArray();
    const catObj = {};
    cats.forEach((cat) => {
      catObj[cat.category] = { name: cat.name, color: cat.color };
    });
    const categories = cats.length > 0 ? catObj : CATEGORIES;
    dispatch(setCategories(categories));
  };
};

export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories: categories,
  };
};

export const saveCategories = (categories) => {
  return async (dispatch) => {
    const catKeys = Object.keys(categories);
    const cats = catKeys.map((cat, index) => {
      return { id: index, category: cat, ...categories[cat] };
    });

    await db.table(TABLE_NAMES.categories).clear();
    await db.table(TABLE_NAMES.categories).bulkAdd(cats);

    dispatch(setCategories(categories));
  };
};
