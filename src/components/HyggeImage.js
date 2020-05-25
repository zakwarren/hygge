import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeImage.module.css";

const HyggeImage = (props) => {
  let instance = props.id ? props.id : 1;
  const rgbValue = 216 - instance * 20;
  const backgroundColor =
    "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";

  return (
    <div className={css.HyggeImage}>
      <span
        className={css.Circle}
        style={{ backgroundColor: backgroundColor }}
      ></span>
    </div>
  );
};

HyggeImage.propTypes = {
  id: PropTypes.number,
};

export default HyggeImage;
