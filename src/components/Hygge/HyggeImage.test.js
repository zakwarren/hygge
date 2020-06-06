import React from "react";
import { shallow } from "enzyme";

import css from "./HyggeImage.module.css";
import HyggeImage from "./HyggeImage";

describe("<HyggeImage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <HyggeImage
        display={true}
        isExpanded={false}
        clicked={jest.fn}
        image="test.png"
        attribution="Test"
      />
    );
  });

  it("should render a <div /> element with the HyggeImage class", () => {
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.HyggeImage)).toEqual(true);
  });

  it("should render the <div /> element with the Expanded class when isExpanded is true", () => {
    wrapper.setProps({ isExpanded: true });
    const div = wrapper.find("div");

    expect(div.hasClass(css.Expanded)).toEqual(true);
  });

  it("should render the <div /> element with the Shrunk class when display is false", () => {
    wrapper.setProps({ display: false });
    const div = wrapper.find("div");

    expect(div.hasClass(css.Shrunk)).toEqual(true);
  });

  it("should render an <img /> element with the Circle class with correct src", () => {
    const img = wrapper.find("img");

    expect(img).toHaveLength(1);
    expect(img.hasClass(css.Circle)).toEqual(true);
    expect(img.prop("src")).toEqual("test.png");
    expect(img.prop("alt")).toEqual("Test");
  });

  it("should decrement a <span /> element with the attribution text when expanded", () => {
    wrapper.setProps({ isExpanded: true });
    const span = wrapper.find("span");

    expect(span).toHaveLength(1);
    expect(span.hasClass(css.Attribution)).toEqual(true);
    expect(span.text()).toEqual("Test");
  });
});
