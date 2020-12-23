import React from "react";
import PropTypes from "prop-types";

import css from "./Modal.module.css";

const Modal = ({ closeFn, children }) => (
  <div className={css.Modal} onClick={closeFn}>
    <div className={css.Content}>
      <span className={css.Close} onClick={closeFn}>
        &times;
      </span>
      <section>{children}</section>
    </div>
  </div>
);

Modal.propTypes = {
  closeFn: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
