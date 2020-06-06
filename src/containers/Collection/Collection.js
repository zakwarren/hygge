import React from "react";

import css from "./Collection.module.css";

const Collection = () => {
  return (
    <main className={css.Collection}>
      <h1 className={css.Heading}>~ my Collection ~</h1>
      <section className={css.Categories}>
        <h2 className={css.SubHeading}>Seasons</h2>
        <div>Circles</div>
        <h2 className={css.SubHeading}>Warmth</h2>
        <div>Circles</div>
        <h2 className={css.SubHeading}>People and animals</h2>
        <div>Circles</div>
        <h2 className={css.SubHeading}>Surreal</h2>
        <div>Circles</div>
      </section>
    </main>
  );
};

export default Collection;
