import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Collection.module.css";
import { CATEGORIES } from "../../shared/categories";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";

export const Collection = (props) => {
  const { collection } = props;

  const catKeys = Object.keys(CATEGORIES);
  const mappedCats = catKeys.map((catName) => {
    const cat = CATEGORIES[catName];
    const images = collection.filter((img) => img.category === cat.name);
    const catWithImgs = { ...cat, collection: images };
    return catWithImgs;
  });

  return (
    <main className={css.Collection}>
      <Heading headerText="Collection" hasExpanded={false} />
      <section className={css.Categories}>
        <CategoryList list={mappedCats} />
      </section>
    </main>
  );
};

Collection.propTypes = {
  collection: PropTypes.array.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    collection: state.hygge.collection,
  };
};

export default connect(mapStateToProps)(Collection);
