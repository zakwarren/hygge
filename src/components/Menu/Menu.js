import React, { useState } from "react";
import PropTypes from "prop-types";

import css from "./Menu.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => setIsOpen((prevOpen) => !prevOpen);

  let classes = [css.Menu];
  let content = <p>...</p>;
  if (isOpen) {
    classes.push(css.Open);
    content = (
      <>
        <p>My hygge board</p>
        <p>My collection</p>
        {props.canInstall ? <p onClick={props.install}>Install</p> : null}
      </>
    );
  }

  return (
    <>
      <Backdrop show={isOpen} clicked={toggleMenuHandler} />
      <div className={classes.join(" ")} onClick={toggleMenuHandler}>
        {content}
      </div>
    </>
  );
};

Menu.propTypes = {
  canInstall: PropTypes.bool.isRequired,
  install: PropTypes.func.isRequired,
};

export default Menu;
