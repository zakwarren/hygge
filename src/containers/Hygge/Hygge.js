import React, { useState } from "react";

import css from "./Hygge.module.css";
import logo from "../../assets/snowflake.png";
import { IMAGE_MAPPING } from "../../shared/images";
import HyggeList from "../../components/Hygge/HyggeList";
import Heading from "../../components/Heading/Heading";

const IMAGES = IMAGE_MAPPING.map((map) => {
  return { ...map, display: true, isExpanded: false };
});

const Hygge = () => {
  const [hygges, setHygges] = useState(IMAGES);
  const [hasExpanded, setHasExpanded] = useState(false);

  const clickHyggeHandler = (id) => {
    let updatedExp = false;

    const updatedHygges = hygges.map((hg) => {
      const newHg = {
        ...hg,
        display: hg.id !== id ? !hg.display : hg.display,
        isExpanded: hg.id === id ? !hg.isExpanded : hg.isExpanded,
      };

      updatedExp = newHg.isExpanded ? newHg.isExpanded : updatedExp;

      return newHg;
    });

    setHygges(updatedHygges);
    setHasExpanded(updatedExp);
  };

  return (
    <main className={css.Hygge}>
      <Heading headerText="Hygge Board" hasExpanded={hasExpanded} />
      <img className={css.Logo} src={logo} alt="Logo" />
      <HyggeList list={hygges} clickHygge={clickHyggeHandler} />
    </main>
  );
};

export default Hygge;
