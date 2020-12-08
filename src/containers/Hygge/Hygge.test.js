import React from "react";
import { shallow } from "enzyme";

import css from "./Hygge.module.css";
import { Hygge, mapStateToProps, mapDispatchToProps } from "./Hygge";
import HyggeList from "../../components/Hygge/HyggeList";
import Heading from "../../components/Heading/Heading";

describe("<Hygge />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const hygge = {
        collection: [],
      };
      const appState = { hygge: hygge };
      const componentState = mapStateToProps(appState);

      expect(componentState).toEqual(hygge);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map the dispatch functions to props correctly", () => {
      const componentDispatch = mapDispatchToProps(jest.fn);

      expect(typeof componentDispatch.onGetSelection).toBe("function");
      expect(typeof componentDispatch.onSetCollection).toBe("function");
    });
  });

  describe("display", () => {
    let wrapper;
    const collection = [];
    const onGetSelection = jest.fn;
    const onSetCollection = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <Hygge {...{ collection, onGetSelection, onSetCollection }} />
      );
    });

    it("should render a <main /> element with the Hygge class", () => {
      const main = wrapper.find("main");

      expect(main).toHaveLength(1);
      expect(main.hasClass(css.Hygge)).toEqual(true);
    });

    it("should render a <Heading /> element", () => {
      const header = wrapper.find(Heading);

      expect(header).toHaveLength(1);
    });

    it("should render a <HyggeList /> element", () => {
      expect(wrapper.find(HyggeList)).toHaveLength(1);
    });
  });
});
