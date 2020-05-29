import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeImage.module.css";

const HyggeImage = (props) => {
  const classes = [css.HyggeImage];
  if (props.isExpanded) {
    classes.push(css.Expanded);
  } else if (!props.display) {
    classes.push(css.Shrunk);
  }

  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <img className={css.Circle} src={props.image} alt={props.attribution} />
      {props.isExpanded ? (
        <span className={css.Attribution}>{props.attribution}</span>
      ) : null}
    </div>
  );
};

HyggeImage.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default HyggeImage;
