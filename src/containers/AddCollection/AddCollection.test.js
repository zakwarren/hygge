import React from "react";
import { shallow } from "enzyme";

import css from "./AddCollection.module.css";
import {
  AddCollection,
  mapStateToProps,
  mapDispatchToProps,
} from "./AddCollection";
import { Formik } from "formik";

describe("<AddCollection />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const hygge = {
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

      expect(typeof componentDispatch.onSetCategories).toBe("function");
    });
  });

  describe("display", () => {
    let wrapper;
    const history = { push: jest.fn };
    const categories = { test: { name: "test", color: "#ffffff" } };
    const onSetCategories = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <AddCollection {...{ history, categories, onSetCategories }} />
      );
    });

    it("should render a <section /> element with the correct class", () => {
      const section = wrapper.find("section");

      expect(section).toHaveLength(1);
      expect(section.hasClass(css.Container)).toEqual(true);
    });

    it("should render a <h1 /> element with the correct class", () => {
      const h1 = wrapper.find("h1");

      expect(h1).toHaveLength(1);
      expect(h1.hasClass(css.Heading)).toEqual(true);
      expect(h1.text()).toEqual("Add Collection");
    });

    it("should render a <Form /> element", () => {
      const form = wrapper.find(Formik);

      expect(form).toHaveLength(1);
    });
  });
});
