import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Hygge.module.css";
import * as actions from "../../store/actions/index";
import { expandHygge } from "../../shared/utilities";
import HyggeList from "../../components/Hygge/HyggeList";
import Heading from "../../components/Heading/Heading";

export const Hygge = (props) => {
  const { collection, onGetSelection, onSetCollection } = props;
  const [hasExpanded, setHasExpanded] = useState(false);

  useEffect(() => {
    onGetSelection();
  }, [onGetSelection]);

  const clickHyggeHandler = (id) => {
    const newCollection = expandHygge(collection, id);
    onSetCollection(newCollection);
    const areExpanded = newCollection.some((hg) => hg.isExpanded);
    setHasExpanded(areExpanded);
  };

  return (
    <main className={css.Hygge}>
      <Heading headerText="Hygge Board" hasExpanded={hasExpanded} />
      {collection && (
        <HyggeList
          list={collection}
          wrap={false}
          clickHygge={clickHyggeHandler}
        />
      )}
    </main>
  );
};

Hygge.propTypes = {
  collection: PropTypes.array,
  onGetSelection: PropTypes.func.isRequired,
  onSetCollection: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    collection: state.hygge.collection,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onGetSelection: () => dispatch(actions.getSelection()),
    onSetCollection: (newCollection) =>
      dispatch(actions.setCollection(newCollection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hygge);
