import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Collection.module.css";
import * as actions from "../../store/actions/index";
import { ALL, CREATE } from "../../shared/categories";
import { getImages } from "../../shared/images";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";

export const Collection = (props) => {
  const {
    history,
    allHygge,
    categories,
    onSetCollection,
    onSetCategories,
  } = props;

  if (!categories) {
    return null;
  }

  const setCategory = (category) => {
    const newCollection = getImages(category);
    onSetCollection(newCollection);
    history.push(`/collection/${category}`);
  };

  const removeCategory = (categoryName) => {
    const filteredCats = { ...categories };
    delete filteredCats[categoryName.toLowerCase()];
    onSetCategories(filteredCats);
  };

  const catKeys = Object.keys(categories);
  const mappedCats = catKeys.map((catName) => {
    const cat = categories[catName];
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
  mappedCats.push({
    name: CREATE.name,
    color: CREATE.color,
    collection: [],
    onClick: () => history.push("/collection/add"),
  });

  return (
    <main className={css.Collection}>
      <Heading headerText="Collection" hasExpanded={false} />
      <section className={css.Categories}>
        <CategoryList list={mappedCats} removeCategory={removeCategory} />
      </section>
    </main>
  );
};

Collection.propTypes = {
  history: PropTypes.object.isRequired,
  allHygge: PropTypes.array.isRequired,
  categories: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onSetCollection: PropTypes.func.isRequired,
  onSetCategories: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    allHygge: state.hygge.allHygge,
    categories: state.hygge.categories,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
    onSetCategories: (newCategories) =>
      dispatch(actions.setCategories(newCategories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
