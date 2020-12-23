import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utilities";

const initialState = {
  isOpen: false,
  content: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return updateObject(state, { isOpen: true, content: action.content });
    case actionTypes.CLOSE_MODAL:
      return updateObject(state, { isOpen: false, content: null });
    default:
      return state;
  }
};

export default reducer;
