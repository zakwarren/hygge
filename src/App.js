import React from "react";

import css from "./App.module.css";
import logo from "./assets/snowflake.png";
import HyggeList from "./components/HyggeList";

const App = () => {
  return (
    <main className={css.App}>
      <h1 className={css.Heading}>~ your hygge ~</h1>
      <img className={css.Logo} src={logo} alt="Logo" />
      <HyggeList list={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
    </main>
  );
};

export default App;
