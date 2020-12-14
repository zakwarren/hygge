import React from "react";
import PropTypes from "prop-types";

import css from "./CategoryList.module.css";
import Category from "./Category";

const CategoryList = ({ list, removeCategory }) => (
  <section className={css.Collections}>
    {list.map((el) => (
      <Category key={el.name} {...el} removeCategory={removeCategory} />
    ))}
  </section>
);

CategoryList.propTypes = {
  list: PropTypes.array.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

export default CategoryList;
