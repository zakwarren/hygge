import * as actionTypes from "./actionTypes";

export const STORED_HELP = "isHelped";

export const getNeedsHelp = () => {
  const storedHelp = localStorage.getItem(STORED_HELP);
  const routesHelped = storedHelp ? JSON.parse(storedHelp) : {};
  return {
    type: actionTypes.SET_NEEDS_HELP,
    routesHelped: routesHelped,
  };
};

export const setNeedsHelp = (routeName) => {
  return (dispatch, getState) => {
    const { routesHelped } = getState().app;
    const newRoutesHelped = { ...routesHelped, [routeName]: true };
    localStorage.setItem(STORED_HELP, JSON.stringify(newRoutesHelped));
    dispatch(setRoutesHelped(newRoutesHelped));
  };
};

export const setRoutesHelped = (routesHelped) => {
  return {
    type: actionTypes.SET_NEEDS_HELP,
    routesHelped: routesHelped,
  };
};
