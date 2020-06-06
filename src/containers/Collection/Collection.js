import React from "react";

import css from "./Collection.module.css";
import CategoryList from "../../components/Collection/CategoryList";

const CATEGORIES = [
  {
    id: 1,
    heading: "Seasons",
    collection: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  },
  {
    id: 2,
    heading: "Warmth",
    collection: [{ id: 6 }, { id: 7 }],
  },
  {
    id: 3,
    heading: "People and animals",
    collection: [{ id: 8 }],
  },
  {
    id: 4,
    heading: "Surreal",
    collection: [{ id: 9 }],
  },
];

const Collection = () => {
  return (
    <main className={css.Collection}>
      <h1 className={css.Heading}>~ my Collection ~</h1>
      <section className={css.Categories}>
        <CategoryList list={CATEGORIES} />
      </section>
    </main>
  );
};

export default Collection;
