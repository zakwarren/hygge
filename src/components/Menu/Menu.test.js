import React from "react";
import { shallow } from "enzyme";

import css from "./Menu.module.css";
import Menu from "./Menu";

describe("<Menu />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu canInstall={false} install={jest.fn} />);
  });

  it("should render a <div /> element with the correct class", () => {
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.Menu)).toEqual(true);
  });

  it("should render a <p /> element with correct text when isOpen is false", () => {
    const p = wrapper.find("p");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("...");
  });
});
