import React from "react";
import PropTypes from "prop-types";

import Category from "./Category";

const CategoryList = (props) => (
  <>
    {props.list.map((el) => (
      <Category key={el.id} {...el} />
    ))}
  </>
);

CategoryList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CategoryList;
