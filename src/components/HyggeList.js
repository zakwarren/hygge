import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeList.module.css";
import HyggeImage from "./HyggeImage";

const HyggeList = (props) => (
  <div className={css.HyggeList}>
    {props.list.map((el) => (
      <HyggeImage key={el.id} id={el.id} />
    ))}
  </div>
);

HyggeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default HyggeList;
