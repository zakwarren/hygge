import React from "react";
import PropTypes from "prop-types";

import css from "./BackButton.module.css";

const BackButton = ({ onClick }) => (
  <span className={css.BackButton} onClick={onClick}>
    &lt;
  </span>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
