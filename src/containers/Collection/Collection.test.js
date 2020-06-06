import React from "react";
import { shallow } from "enzyme";

import css from "./Collection.module.css";
import Collection from "./Collection";
import CategoryList from "../../components/Collection/CategoryList";

describe("<Collection />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Collection />);
  });

  it("should render a <main /> element with the correct class", () => {
    const main = wrapper.find("main");

    expect(main).toHaveLength(1);
    expect(main.hasClass(css.Collection)).toEqual(true);
  });

  it("should render a <h1 /> element with the Heading class", () => {
    const header = wrapper.find("h1");

    expect(header).toHaveLength(1);
    expect(header.hasClass(css.Heading)).toEqual(true);
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
