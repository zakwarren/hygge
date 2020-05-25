import React from "react";
import { shallow } from "enzyme";

import css from "./HyggeImage.module.css";
import HyggeImage from "./HyggeImage";

describe("<HyggeImage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HyggeImage />);
  });

  it("should render a <div /> element with the HyggeImage class", () => {
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.HyggeImage)).toEqual(true);
  });

  it("should render a <span /> element with the Circle class and default background color", () => {
    const span = wrapper.find("span");

    expect(span).toHaveLength(1);
    expect(span.hasClass(css.Circle)).toEqual(true);
    expect(span.prop("style").backgroundColor).toEqual("rgb(196,196,196)");
  });

  it("should decrement the background color by 20 when id is 2", () => {
    wrapper.setProps({ id: 2 });
    const span = wrapper.find("span");

    expect(span.prop("style").backgroundColor).toEqual("rgb(176,176,176)");
  });
});
