import React from "react";
import PropTypes from "prop-types";

import css from "./Category.module.css";
import { CREATE, ALL } from "../../shared/categories";

const Category = ({ name, color, collection, onClick, removeCategory }) => (
  <div
    className={css.Circle}
    style={{ backgroundColor: color, opacity: name === CREATE.name ? 1 : 0.25 }}
    onClick={onClick}
  >
    <h2 className={`${css.SubHeading} ${name === CREATE.name ? css.Big : ""}`}>
      {name}
    </h2>
    {name === CREATE.name ? null : (
      <div className={css.Value}>x {collection.length}</div>
    )}
    {[CREATE.name, ALL.name].includes(name) ? null : (
      <span
        className={css.Remove}
        onClick={(event) => {
          event.stopPropagation();
          removeCategory(name);
        }}
      >
        X
      </span>
    )}
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

export default Category;
