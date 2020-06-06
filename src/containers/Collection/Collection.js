import React from "react";

import css from "./Collection.module.css";
import Category from "../../components/Collection/Category";

const Collection = () => {
  return (
    <main className={css.Collection}>
      <h1 className={css.Heading}>~ my Collection ~</h1>
      <section className={css.Categories}>
        <Category heading="Seasons" collection={["circles"]} />
        <Category heading="Warmth" collection={["circles"]} />
        <Category heading="People and animals" collection={["circles"]} />
        <Category heading="Surreal" collection={["circles"]} />
      </section>
    </main>
  );
};

export default Collection;
