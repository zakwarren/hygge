import React from "react";
import { shallow } from "enzyme";

import css from "./AddImage.module.css";
import { AddImage, mapStateToProps, mapDispatchToProps } from "./AddImage";
import { Formik } from "formik";

describe("<AddImage />", () => {
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

      expect(typeof componentDispatch.onSaveNewHygge).toBe("function");
    });
  });

  describe("display", () => {
    let wrapper;
    const history = { push: jest.fn, goBack: jest.fn };
    const categories = { test: { name: "test", color: "#ffffff" } };
    const onSaveNewHygge = jest.fn;

    beforeEach(() => {
      wrapper = shallow(
        <AddImage {...{ history, categories, onSaveNewHygge }} />
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
      expect(h1.text()).toEqual("Add Hygge Image");
    });

    it("should render a <Form /> element", () => {
      const form = wrapper.find(Formik);

      expect(form).toHaveLength(1);
    });
  });
});
