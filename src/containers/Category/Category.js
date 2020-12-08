import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import css from "./Category.module.css";
import * as actions from "../../store/actions/index";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";

const Category = (props) => {
  const { collection, selectedIds, onSaveSelection } = props;
  const { category } = useParams();

  const clickHyggeHandler = (id) => {
    let select = [];
    if (selectedIds.includes(id)) {
      select = selectedIds.filter((selId) => selId !== id);
    } else {
      select = [...selectedIds, id];
    }
    const unique = [...new Set(select)];
    onSaveSelection(unique);
  };

  const listWithSelected = collection
    ? collection.map((map) => {
        return { ...map, isSelected: selectedIds.includes(map.id) };
      })
    : null;

  let render = <Redirect to="/collection" />;
  if (collection) {
    render = (
      <main className={css.Category}>
        <Heading headerText={category} hasExpanded={false} />
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
