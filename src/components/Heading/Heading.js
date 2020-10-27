import React from "react";
import PropTypes from "prop-types";

import css from "./Heading.module.css";

const Heading = (props) => {
  const { headerText, hasExpanded } = props;

  const headerClasses = [css.Heading];
  const superHeaderClasses = [css.SuperHeader];
  if (hasExpanded) {
    headerClasses.push(css.Expanded);
    superHeaderClasses.push(css.Expanded);
  }

  return (
    <>
      <h5 className={superHeaderClasses.join(" ")}>my</h5>
      <h1 className={headerClasses.join(" ")}>{headerText}</h1>
    </>
  );
};

Heading.propTypes = {
  headerText: PropTypes.string.isRequired,
  hasExpanded: PropTypes.bool.isRequired,
};

export default Heading;
