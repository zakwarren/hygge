import React from "react";
import { shallow } from "enzyme";

import css from "./Hygge.module.css";
import logo from "../assets/snowflake.png";
import Hygge from "./Hygge";
import HyggeList from "../components/HyggeList";

describe("<Hygge />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hygge />);
  });

  it("should render a <main /> element with the Hygge class", () => {
    const main = wrapper.find("main");

    expect(main).toHaveLength(1);
    expect(main.hasClass(css.Hygge)).toEqual(true);
  });

  it("should render a <h1 /> element with the Heading class", () => {
    const header = wrapper.find("h1");

    expect(header).toHaveLength(1);
    expect(header.hasClass(css.Heading)).toEqual(true);
  });

  it("should render a <img /> element with the Logo class and correct src", () => {
    const img = wrapper.find("img");

    expect(img).toHaveLength(1);
    expect(img.hasClass(css.Logo)).toEqual(true);
    expect(img.prop("src")).toEqual(logo);
    expect(img.prop("alt")).toEqual("Logo");
  });

  it("should render a <HyggeList /> element", () => {
    expect(wrapper.find(HyggeList)).toHaveLength(1);
  });
});
