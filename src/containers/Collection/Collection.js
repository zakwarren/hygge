import React from "react";

import css from "./Collection.module.css";
import CategoryList from "../../components/Collection/CategoryList";

const CATEGORIES = [
  {
    id: 1,
    heading: "Seasons",
    collection: ["circles"],
  },
  {
    id: 2,
    heading: "Warmth",
    collection: ["circles"],
  },
  {
    id: 3,
    heading: "People and animals",
    collection: ["circles"],
  },
  {
    id: 4,
    heading: "Surreal",
    collection: ["circles"],
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
