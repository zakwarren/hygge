import React from "react";
import PropTypes from "prop-types";

import css from "./CategoryList.module.css";
import Category from "./Category";

const CategoryList = (props) => (
  <section className={css.Collections}>
    {props.list.map((el) => (
      <Category key={el.id} {...el} />
    ))}
  </section>
);

CategoryList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CategoryList;
