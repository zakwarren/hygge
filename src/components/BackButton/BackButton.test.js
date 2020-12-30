import React from "react";
import { shallow } from "enzyme";

import css from "./BackButton.module.css";
import BackButton from "./BackButton";

describe("<Backdrop />", () => {
  let wrapper;
  const onClick = jest.fn;

  beforeEach(() => {
    wrapper = shallow(<BackButton onClick={onClick} />);
  });

  it("should render a <span /> element with the correct class", () => {
    const span = wrapper.find("span");

    expect(span).toHaveLength(1);
    expect(span.hasClass(css.BackButton)).toEqual(true);
  });
});
