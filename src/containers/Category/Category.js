import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import css from "./Category.module.css";
import * as actions from "../../store/actions/index";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";

export const Category = (props) => {
  const { match, collection, selectedIds, onSaveSelection } = props;

  const clickHyggeHandler = (id) => {
    let select = [];
    if (selectedIds && selectedIds.includes(id)) {
      select = selectedIds.filter((selId) => selId !== id);
    } else {
      select = [...selectedIds, id];
    }
    const unique = [...new Set(select)];
    onSaveSelection(unique);
  };

  const listWithSelected = collection
    ? collection.map((map) => {
        const selected = selectedIds && selectedIds.includes(map.id);
        return { ...map, isSelected: selected };
      })
    : null;

  let render = <Redirect to="/collection" />;
  if (collection) {
    render = (
      <main className={css.Category}>
        <Heading headerText={match.params.category} hasExpanded={false} />
        <div className={css.Backing}></div>
        <HyggeList
          list={listWithSelected}
          wrap={true}
          clickHygge={clickHyggeHandler}
        />
      </main>
    );
  }

  return render;
};

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ category: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  collection: PropTypes.array,
  selectedIds: PropTypes.array,
  onSaveSelection: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    collection: state.hygge.collection,
    selectedIds: state.hygge.selectedIds,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSaveSelection: (selection) => dispatch(actions.saveSelection(selection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
