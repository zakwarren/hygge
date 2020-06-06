import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeList.module.css";
import HyggeImage from "./HyggeImage";

const HyggeList = (props) => (
  <div className={css.HyggeList}>
    {props.list.map((el) => (
      <HyggeImage key={el.id} {...el} clicked={() => props.clickHygge(el.id)} />
    ))}
  </div>
);

HyggeList.propTypes = {
  list: PropTypes.array.isRequired,
  clickHygge: PropTypes.func.isRequired,
};

export default HyggeList;
