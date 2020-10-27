import React from "react";

import css from "./Collection.module.css";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";

const CATEGORIES = [
  {
    id: 1,
    heading: "Surreal",
    color: "#48d0e2",
    collection: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  },
  {
    id: 2,
    heading: "Warmth",
    color: "#db5b5b",
    collection: [{ id: 6 }, { id: 7 }],
  },
  {
    id: 3,
    heading: "Seasons",
    color: "#f2b61a",
    collection: [{ id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }],
  },
  {
    id: 4,
    heading: "Aquatic",
    color: "#6ca7ec",
    collection: [{ id: 12 }],
  },
  {
    id: 5,
    heading: "Creatures",
    color: "#7ab778",
    collection: [],
  },
];

const Collection = () => {
  return (
    <main className={css.Collection}>
      <Heading headerText="Collection" hasExpanded={false} />
      <section className={css.Categories}>
        <CategoryList list={CATEGORIES} />
      </section>
    </main>
  );
};

export default Collection;
