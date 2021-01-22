import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

import css from "./HyggeImage.module.css";
import { getSelectedCount } from "../../store/selectors/hygge";
import { useLongPress } from "../../hooks/useLongPress";

export const HyggeImage = (props) => {
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
    totalSelected,
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
  const divProps = {};
  if (isSelected) {
    imgClasses.push(css.Selected);

    const hyggePlural = totalSelected === 1 ? "image" : "images";
    divProps["data-tip"] = `${totalSelected} ${hyggePlural} selected`;
    divProps["data-for"] = `${id}Tip`;
  }

  return (
    <div className={classes.join(" ")} {...divProps}>
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
      {isSelected && (
        <ReactTooltip
          id={`${id}Tip`}
          place="top"
          type="dark"
          effect="solid"
          event="click"
          eventOff="mouseleave"
        />
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
  totalSelected: PropTypes.number.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    totalSelected: getSelectedCount(state),
  };
};

export default connect(mapStateToProps)(HyggeImage);
