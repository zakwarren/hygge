import React from "react";
import { shallow } from "enzyme";

import css from "./Heading.module.css";
import Heading from "./Heading";

describe("<Heading />", () => {
  let wrapper;
  const text = "Test";

  beforeEach(() => {
    wrapper = shallow(<Heading headerText={text} hasExpanded={false} />);
  });

  it("should render a <h5 /> and a <h1 /> element with the correct class and text", () => {
    const h5 = wrapper.find("h5");
    const h1 = wrapper.find("h1");

    expect(h5).toHaveLength(1);
    expect(h5.hasClass(css.SuperHeader)).toEqual(true);
    expect(h5.text()).toEqual("my");

    expect(h1).toHaveLength(1);
    expect(h1.hasClass(css.Heading)).toEqual(true);
    expect(h1.text()).toEqual(text);
  });

  it("should render with the correct class when hasExpanded is true", () => {
    wrapper.setProps({ hasExpanded: true });
    const h5 = wrapper.find("h5");
    const h1 = wrapper.find("h1");

    expect(h5.hasClass(css.Expanded)).toEqual(true);
    expect(h1.hasClass(css.Expanded)).toEqual(true);
  });
});
