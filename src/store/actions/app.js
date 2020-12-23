import * as actionTypes from "./actionTypes";

// const STORED_HELP = "isHelped";

export const openModal = (content) => {
  return {
    type: actionTypes.OPEN_MODAL,
    content: content,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
