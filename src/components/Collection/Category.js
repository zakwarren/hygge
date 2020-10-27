import React from "react";
import PropTypes from "prop-types";

import css from "./Category.module.css";

const Category = (props) => (
  <div className={css.Circle} style={{ backgroundColor: props.color }}>
    <h2 className={css.SubHeading}>{props.heading}</h2>
    <div className={css.Value}>x {props.collection.length}</div>
  </div>
);

Category.propTypes = {
  heading: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default Category;
