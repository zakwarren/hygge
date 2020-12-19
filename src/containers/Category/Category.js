import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import css from "./Category.module.css";
import * as actions from "../../store/actions/index";
import { expandHygge } from "../../shared/utilities";
import { ALL } from "../../shared/categories";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";

export const Category = (props) => {
  const {
    history,
    match,
    collection,
    selectedIds,
    categories,
    onSaveSelection,
    onSetCollection,
    onRemoveHygge,
  } = props;
  const [hasExpanded, setHasExpanded] = useState(false);

  const clickHandler = (id) => {
    const newCollection = expandHygge(collection, id);
    onSetCollection(newCollection);
    const areExpanded = newCollection.some((hg) => hg.isExpanded);
    setHasExpanded(areExpanded);
  };

  const longClickHandler = (id) => {
    let select = [];
    if (selectedIds && selectedIds.includes(id)) {
      select = selectedIds.filter((selId) => selId !== id);
    } else {
      select = selectedIds ? [...selectedIds, id] : [id];
    }
    const unique = [...new Set(select)];
    onSaveSelection(unique);
  };

  const removeHygge = (id) => {
    onRemoveHygge(id);

    const newCollection = collection.filter((hg) => hg.id !== id);
    onSetCollection(newCollection);
  };

  const goBack = () => history.push("/collection");

  const listWithSelected = collection
    ? collection.map((map) => {
        const selected = selectedIds && selectedIds.includes(map.id);
        return { ...map, isSelected: selected };
      })
    : null;

  let render = <Redirect to="/collection" />;
  if (collection) {
    const cat = categories[match.params.category.toLowerCase()];
    const backingStyle = {
      backgroundColor: cat ? cat.color : ALL.color,
    };

    render = (
      <main className={css.Category}>
        <Heading headerText={match.params.category} hasExpanded={hasExpanded} />
        <div className={css.Backing} style={backingStyle}></div>
        <span className={css.BackButton} onClick={goBack}>
          &#9001;
        </span>
        <HyggeList
          list={listWithSelected}
          wrap={true}
          clickHygge={clickHandler}
          longClickHygge={longClickHandler}
          removeHygge={removeHygge}
        />
      </main>
    );
  }

  return render;
};

Category.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({ category: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  collection: PropTypes.array,
  selectedIds: PropTypes.array,
  categories: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onSaveSelection: PropTypes.func.isRequired,
  onSetCollection: PropTypes.func.isRequired,
  onRemoveHygge: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    collection: state.hygge.collection,
    selectedIds: state.hygge.selectedIds,
    categories: state.hygge.categories,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSaveSelection: (selection) => dispatch(actions.saveSelection(selection)),
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
    onRemoveHygge: (id) => dispatch(actions.removeHygge(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
