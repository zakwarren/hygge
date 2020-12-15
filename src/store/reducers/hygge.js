import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utilities";

const initialState = {
  categories: null,
  allHygge: null,
  collection: null,
  selectedIds: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_HYGGE:
      return updateObject(state, { allHygge: action.allHygge });
    case actionTypes.SET_COLLECTION:
      return updateObject(state, { collection: action.collection });
    case actionTypes.SET_SELECTED:
      return updateObject(state, { selectedIds: action.selectedIds });
    case actionTypes.SET_CATEGORIES:
      return updateObject(state, { categories: action.categories });
    default:
      return state;
  }
};

export default reducer;
