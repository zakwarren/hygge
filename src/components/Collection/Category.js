import React from "react";
import PropTypes from "prop-types";

import css from "./Category.module.css";

const Category = (props) => (
  <div
    className={css.Circle}
    style={{ backgroundColor: props.color }}
    onClick={props.onClick}
  >
    <h2 className={css.SubHeading}>{props.name}</h2>
    <div className={css.Value}>x {props.collection.length}</div>
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
