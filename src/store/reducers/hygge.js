import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utilities";
import { getImages } from "../../shared/images";

const initialState = {
  allHygge: getImages(),
  collection: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLLECTION:
      return updateObject(state, { collection: action.collection });
    default:
      return state;
  }
};

export default reducer;
