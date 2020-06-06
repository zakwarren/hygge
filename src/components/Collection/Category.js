import React from "react";
import PropTypes from "prop-types";

import css from "./Category.module.css";

const Category = (props) => (
  <>
    <h2 className={css.SubHeading}>{props.heading}</h2>
    <div className={css.Collection}>
      {props.collection.map((item) => (
        <div key={item.id} className={css.Circle}></div>
      ))}
    </div>
  </>
);

Category.propTypes = {
  heading: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
};

export default Category;
