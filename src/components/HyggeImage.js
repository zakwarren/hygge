import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeImage.module.css";

const HyggeImage = (props) => {
  let render = null;

  if (props.display) {
    let instance = props.id ? props.id : 1;
    const rgbValue = 216 - instance * 20;
    const backgroundColor =
      "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";

    const classes = [css.HyggeImage];
    if (props.isExpanded) {
      classes.push(css.Expanded);
    }

    render = (
      <div className={classes.join(" ")} onClick={props.clicked}>
        <span
          className={css.Circle}
          style={{ backgroundColor: backgroundColor }}
        ></span>
      </div>
    );
  }

  return render;
};

HyggeImage.propTypes = {
  id: PropTypes.number,
  display: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default HyggeImage;
