import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeList.module.css";
import HyggeImage from "./HyggeImage";

const HyggeList = (props) => {
  const { list, wrap, clickHygge } = props;

  const classes = wrap ? `${css.HyggeList} ${css.Wrap}` : css.HyggeList;

  return (
    <div className={classes}>
      {list.map((el) => (
        <HyggeImage
          key={el.id}
          isSmall={wrap}
          {...el}
          clicked={() => clickHygge(el.id)}
        />
      ))}
    </div>
  );
};

HyggeList.propTypes = {
  list: PropTypes.array.isRequired,
  wrap: PropTypes.bool.isRequired,
  clickHygge: PropTypes.func.isRequired,
};

export default HyggeList;
