import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeImage.module.css";
import { useLongPress } from "../../hooks/useLongPress";

const HyggeImage = (props) => {
  const {
    image,
    attribution,
    display,
    isExpanded,
    isSelected,
    isSmall,
    clicked,
    longClicked,
  } = props;

  const longPressEvent = useLongPress(longClicked, clicked, {
    shouldPreventDefault: true,
    delay: 500,
  });

  const classes = [css.HyggeImage];
  if (isExpanded) {
    classes.push(css.Expanded);
  } else if (!display) {
    classes.push(css.Shrunk);
  }
  if (isSmall && !isExpanded && display) {
    classes.push(css.Small);
  }

  const imgClasses = [css.Circle];
  if (isSelected) {
    imgClasses.push(css.Selected);
  }

  return (
    <div className={classes.join(" ")} {...longPressEvent}>
      <img className={imgClasses.join(" ")} src={image} alt={attribution} />
      {isExpanded ? (
        <span className={css.Attribution}>{attribution}</span>
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
  isSelected: PropTypes.bool,
  isSmall: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  longClicked: PropTypes.func.isRequired,
};

export default HyggeImage;
