import React from "react";

import css from "./HyggeList.module.css";
import HyggeImage from "./HyggeImage";

const HyggeList = (props) => (
  <div className={css.HyggeList}>
    {props.list.map((el) => (
      <HyggeImage key={el.id} id={el.id} />
    ))}
  </div>
);

export default HyggeList;
