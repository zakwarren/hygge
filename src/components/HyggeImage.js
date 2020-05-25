import React from "react";

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

export default HyggeImage;
