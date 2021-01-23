import React from "react";
import PropTypes from "prop-types";

import css from "./HyggeImage.module.css";
import { useLongPress } from "../../hooks/useLongPress";

const HyggeImage = (props) => {
  const {
    id,
    image,
    attribution,
    display,
    isExpanded,
    isSelected,
    isSmall,
    clicked,
    longClicked,
    removeHygge,
  } = props;

  const clickEvents = useLongPress(longClicked, clicked, {
    shouldPreventDefault: true,
    delay: 500,
  });
  const clickHandler = longClicked ? clickEvents : { onClick: clicked };

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
    <div className={classes.join(" ")}>
      <img
        className={imgClasses.join(" ")}
        src={image}
        alt={attribution}
        {...clickHandler}
      />
      {isExpanded ? (
        <span className={css.Attribution}>{attribution}</span>
      ) : null}
      {isExpanded || !removeHygge ? null : (
        <span
          className={css.Remove}
          onClick={(event) => {
            event.stopPropagation();
            removeHygge(id);
          }}
        >
          X
        </span>
      )}
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
  longClicked: PropTypes.func,
  removeHygge: PropTypes.func,
};

export default HyggeImage;
