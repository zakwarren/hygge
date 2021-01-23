import React from "react";
import { shallow } from "enzyme";

import css from "./Collection.module.css";
import { Collection, mapStateToProps, mapDispatchToProps } from "./Collection";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";
import Modal from "../../components/Modal/Modal";

describe("<Collection />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const app = {
        routesHelped: {},
      };
      const hygge = {
        allHygge: [],
        Categories: {},
      };
      const appState = { app: app, hygge: hygge };
      const componentState = mapStateToProps(appState);

      expect(componentState.needsHelp).toEqual(true);
      expect(componentState.allHygge).toEqual(hygge.allHygge);
      expect(componentState.categories).toEqual(hygge.categories);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map the dispatch functions to props correctly", () => {
      const componentDispatch = mapDispatchToProps(jest.fn);

      expect(typeof componentDispatch.onHadHelp).toBe("function");
      expect(typeof componentDispatch.onSaveCategories).toBe("function");
    });
  });

  describe("display", () => {
    let wrapper;
    const history = { push: jest.fn };
    const needsHelp = false;
    const allHygge = [{ category: "test" }];
    const categories = { test: { name: "test", color: "#ffffff" } };
    const onHadHelp = jest.fn;
    const onSaveCategories = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <Collection
          {...{
            history,
            needsHelp,
            allHygge,
            categories,
            onHadHelp,
            onSaveCategories,
          }}
        />
      );
    });

    it("should render null if categories are null", () => {
      wrapper.setProps({ categories: null });

      expect(wrapper.isEmptyRender()).toBe(true);
    });

    it("should render a <main /> element with the correct class", () => {
      const main = wrapper.find("main");

      expect(main).toHaveLength(1);
      expect(main.hasClass(css.Collection)).toEqual(true);
    });

    it("should render a <Heading /> element", () => {
      const header = wrapper.find(Heading);

      expect(header).toHaveLength(1);
    });

    it("should render a <section /> element with the correct class", () => {
      const section = wrapper.find("section");

      expect(section).toHaveLength(1);
      expect(section.hasClass(css.Categories)).toEqual(true);
    });

    it("should render a <CategoryList /> element", () => {
      const cat = wrapper.find(CategoryList);

      expect(cat).toHaveLength(1);
    });

    it("should render a <Modal /> element if needsHelp is true", () => {
      wrapper.setProps({ needsHelp: true });
      const modal = wrapper.find(Modal);

      expect(modal).toHaveLength(1);
    });
  });
});
