import React from "react";

import css from "./App.module.css";
import HyggeImage from "./components/HyggeImage";

const App = () => {
  return (
    <main className={css.App}>
      <h1 className={css.Heading}>~ your hygge ~</h1>
      <HyggeImage />
    </main>
  );
};

export default App;
