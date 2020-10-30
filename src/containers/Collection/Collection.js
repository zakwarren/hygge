import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Collection.module.css";
import * as actions from "../../store/actions/index";
import { CATEGORIES, ALL } from "../../shared/categories";
import { getImages } from "../../shared/images";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";

export const Collection = (props) => {
  const { history, allHygge, onSetCollection } = props;

  const setCategory = (category) => {
    const newCollection = getImages(category);
    onSetCollection(newCollection);
    history.push("/");
  };

  const catKeys = Object.keys(CATEGORIES);
  const mappedCats = catKeys.map((catName) => {
    const cat = CATEGORIES[catName];
    const images = allHygge.filter((img) => img.category === cat.name);
    const catWithImgs = {
      ...cat,
      collection: images,
      onClick: () => setCategory(cat.name),
    };
    return catWithImgs;
  });
  mappedCats.unshift({
    name: ALL.name,
    color: ALL.color,
    collection: allHygge,
    onClick: () => setCategory(ALL.name),
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
  history: PropTypes.object.isRequired,
  allHygge: PropTypes.array.isRequired,
  onSetCollection: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    allHygge: state.hygge.allHygge,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
