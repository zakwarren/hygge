import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeList.module.css";
import HyggeImage from "./HyggeImage";

const HyggeList = (props) => {
  const { list, wrap, clickHygge, longClickHygge } = props;

  const classes = wrap ? `${css.HyggeList} ${css.Wrap}` : css.HyggeList;

  const onLongPress = longClickHygge
    ? longClickHygge
    : process.env.NODE_ENV === "development"
    ? () => console.warn("No long press function")
    : () => {};

  return (
    <div className={classes}>
      {list.map((el) => (
        <HyggeImage
          key={el.id}
          isSmall={wrap}
          {...el}
          clicked={() => clickHygge(el.id)}
          longClicked={() => onLongPress(el.id)}
        />
      ))}
    </div>
  );
};

HyggeList.propTypes = {
  list: PropTypes.array.isRequired,
  wrap: PropTypes.bool.isRequired,
  clickHygge: PropTypes.func.isRequired,
  longClickHygge: PropTypes.func,
};

export default HyggeList;
