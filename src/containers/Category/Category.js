import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import css from "./Category.module.css";
import * as actions from "../../store/actions/index";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";

const Category = (props) => {
  const { collection, onSetCollection } = props;
  const { category } = useParams();

  const clickHyggeHandler = (id) => {
    const newCollection = collection.map((map) => {
      if (map.id === id) {
        return { ...map, isSelected: !map.isSelected };
      } else {
        return map;
      }
    });
    onSetCollection(newCollection);
  };

  let render = <Redirect to="/collection" />;
  if (collection) {
    render = (
      <main className={css.Category}>
        <Heading headerText={category} hasExpanded={false} />
        <div className={css.Backing}></div>
        <HyggeList
          list={collection}
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
  onSetCollection: PropTypes.func.isRequired,
  onSaveSelection: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    collection: state.hygge.collection,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
    onSaveSelection: (selection) => dispatch(actions.saveSelection(selection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
