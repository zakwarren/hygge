import React from "react";
import { shallow } from "enzyme";

import css from "./Category.module.css";
import { Category, mapStateToProps, mapDispatchToProps } from "./Category";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";
import BackButton from "../../components/BackButton/BackButton";

describe("<Category />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const hygge = {
        collection: [],
        selectedIds: [],
        categories: {},
      };
      const appState = { hygge: hygge };
      const componentState = mapStateToProps(appState);

      expect(componentState).toEqual(hygge);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map the dispatch functions to props correctly", () => {
      const componentDispatch = mapDispatchToProps(jest.fn);

      expect(typeof componentDispatch.onSaveSelection).toBe("function");
      expect(typeof componentDispatch.onSetCollection).toBe("function");
      expect(typeof componentDispatch.onRemoveHygge).toBe("function");
    });
  });

  describe("display", () => {
    let wrapper;
    const history = { push: jest.fn };
    const match = { params: { category: "Test" } };
    const allHygge = [
      { id: 1, category: "test" },
      { id: 2, category: "test 2" },
    ];
    const selectedIds = [1];
    const categories = { test: { name: "test", color: "test" } };
    const onSaveSelection = jest.fn;
    const onSetCollection = jest.fn;
    const onRemoveHygge = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <Category
          {...{
            history,
            match,
            collection: allHygge,
            selectedIds,
            categories,
            onSaveSelection,
            onSetCollection,
            onRemoveHygge,
          }}
        />
      );
    });

    it("should render a <main /> element with the correct class", () => {
      const main = wrapper.find("main");

      expect(main).toHaveLength(1);
      expect(main.hasClass(css.Category)).toEqual(true);
    });

    it("should render a <Heading /> element", () => {
      const header = wrapper.find(Heading);

      expect(header).toHaveLength(1);
    });

    it("should render a <div /> element with the correct class", () => {
      const div = wrapper.find("div");

      expect(div).toHaveLength(1);
      expect(div.hasClass(css.Backing)).toEqual(true);
    });

    it("should render a <HyggeList /> element", () => {
      const hygge = wrapper.find(HyggeList);

      expect(hygge).toHaveLength(1);
    });

    it("should render a <BackButton /> element", () => {
      const span = wrapper.find(BackButton);

      expect(span).toHaveLength(1);
    });
  });
});
