import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utilities";

const initialState = {
  routesHelped: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NEEDS_HELP:
      return updateObject(state, { routesHelped: action.routesHelped });
    default:
      return state;
  }
};

export default reducer;
