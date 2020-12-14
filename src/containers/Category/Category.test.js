import React from "react";
import { shallow } from "enzyme";

import css from "./Category.module.css";
import { Category, mapStateToProps, mapDispatchToProps } from "./Category";
import Heading from "../../components/Heading/Heading";
import HyggeList from "../../components/Hygge/HyggeList";

describe("<Category />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const hygge = {
        collection: [],
        selectedIds: [],
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
    });
  });

  describe("display", () => {
    let wrapper;
    const match = { params: { category: "Test" } };
    const allHygge = [
      { id: 1, category: "test" },
      { id: 2, category: "test 2" },
    ];
    const selectedIds = [1];
    const onSaveSelection = jest.fn;
    const onSetCollection = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <Category
          {...{
            match,
            collection: allHygge,
            selectedIds,
            onSaveSelection,
            onSetCollection,
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
  });
});
