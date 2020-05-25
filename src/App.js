import React, { useState } from "react";

import css from "./App.module.css";
import logo from "./assets/snowflake.png";
import HyggeList from "./components/HyggeList";

const App = () => {
  const [hygges, setHygges] = useState([
    { id: 1, display: true, isExpanded: false },
    { id: 2, display: true, isExpanded: false },
    { id: 3, display: true, isExpanded: false },
  ]);
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

  const headerClasses = [css.Heading];
  if (hasExpanded) {
    headerClasses.push(css.Expanded);
  }

  return (
    <main className={css.App}>
      <h1 className={headerClasses.join(" ")}>~ your hygge ~</h1>
      <img className={css.Logo} src={logo} alt="Logo" />
      <HyggeList list={hygges} clickHygge={clickHyggeHandler} />
    </main>
  );
};

export default App;
