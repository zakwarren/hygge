import React from "react";
import { shallow } from "enzyme";

import css from "./Collection.module.css";
import { Collection, mapStateToProps } from "./Collection";
import CategoryList from "../../components/Collection/CategoryList";
import Heading from "../../components/Heading/Heading";

describe("<Collection />", () => {
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

  describe("display", () => {
    let wrapper;
    const collection = ["test"];

    beforeEach(() => {
      wrapper = shallow(<Collection collection={collection} />);
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
  });
});
