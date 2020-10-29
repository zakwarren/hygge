import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import css from "./Hygge.module.css";
import logo from "../../assets/snowflake.png";
import * as actions from "../../store/actions/index";
import { expandHygge } from "../../shared/utilities";
import HyggeList from "../../components/Hygge/HyggeList";
import Heading from "../../components/Heading/Heading";

export const Hygge = (props) => {
  const { collection, onSetCollection } = props;
  const [hasExpanded, setHasExpanded] = useState(false);

  const clickHyggeHandler = (id) => {
    const newCollection = expandHygge(collection, id);
    onSetCollection(newCollection);
    const areExpanded = newCollection.some((hg) => hg.isExpanded);
    setHasExpanded(areExpanded);
  };

  return (
    <main className={css.Hygge}>
      <Heading headerText="Hygge Board" hasExpanded={hasExpanded} />
      <img className={css.Logo} src={logo} alt="Logo" />
      <HyggeList list={collection} clickHygge={clickHyggeHandler} />
    </main>
  );
};

Hygge.propTypes = {
  collection: PropTypes.array.isRequired,
  onSetCollection: PropTypes.func.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hygge);
