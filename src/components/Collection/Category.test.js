import React from "react";
import { shallow } from "enzyme";

import css from "./Category.module.css";
import Category from "./Category";

describe("<Category />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Category name="Test" color="#db5b5b" collection={[{ id: 1 }]} />
    );
  });

  it("should render a <h2 /> element with the correct class and text", () => {
    const h = wrapper.find("h2");

    expect(h).toHaveLength(1);
    expect(h.hasClass(css.SubHeading)).toEqual(true);
    expect(h.text()).toEqual("Test");
  });

  it("should render two <div /> elements, one container and another for each item in collection", () => {
    const divs = wrapper.find("div");

    expect(divs).toHaveLength(2);
    expect(divs.get(0).props.className).toEqual(css.Circle);
  });
});
