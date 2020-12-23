import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Collection.module.css";
import * as actions from "../../store/actions/index";
import { ALL, CREATE } from "../../shared/categories";
import { filterImages } from "../../shared/images";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";
import Modal from "../../components/Modal/Modal";
import hand from "./hand.svg";

export const Collection = (props) => {
  const {
    history,
    needsHelp,
    allHygge,
    categories,
    onHadHelp,
    onSetCollection,
    onSaveCategories,
  } = props;

  if (!categories || !allHygge) {
    return null;
  }

  const helpContent = needsHelp ? (
    <div className={css.Column}>
      <div className={css.Row}>
        <div className={css.Cell}>
          <div className={css.Circle} />
          <img className={css.Hand} src={hand} alt="hand" />
        </div>
        <div className={css.Cell}>
          <p>Tap to zoom</p>
        </div>
      </div>
      <div className={css.Row}>
        <div className={css.Cell}>
          <div className={`${css.Circle} ${css.Filled}`} />
          <img className={css.Hand} src={hand} alt="hand" />
        </div>
        <div className={css.Cell}>
          <p className={css.Bold}>Tap and hold</p>
          <p>to add to board</p>
        </div>
      </div>
    </div>
  ) : null;

  const setCategory = (category) => {
    const newCollection = filterImages(allHygge, category);
    onSetCollection(newCollection);
    history.push(`/collection/${category}`);
  };

  const removeCategory = (categoryName) => {
    const filteredCats = { ...categories };
    delete filteredCats[categoryName.toLowerCase()];
    onSaveCategories(filteredCats);
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
      {needsHelp && <Modal closeFn={onHadHelp}>{helpContent}</Modal>}
    </main>
  );
};

Collection.propTypes = {
  history: PropTypes.object.isRequired,
  needsHelp: PropTypes.bool.isRequired,
  allHygge: PropTypes.array,
  categories: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onHadHelp: PropTypes.func.isRequired,
  onSetCollection: PropTypes.func.isRequired,
  onSaveCategories: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    needsHelp: !state.app.routesHelped?.collection,
    allHygge: state.hygge.allHygge,
    categories: state.hygge.categories,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onHadHelp: () => dispatch(actions.setNeedsHelp("collection")),
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
    onSaveCategories: (newCategories) =>
      dispatch(actions.saveCategories(newCategories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
