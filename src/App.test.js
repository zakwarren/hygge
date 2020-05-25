import React from "react";
import { shallow } from "enzyme";

import css from "./App.module.css";
import App from "./App";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a <main /> element with the App class", () => {
    const main = wrapper.find("main");

    expect(main).toHaveLength(1);
    expect(main.hasClass(css.App)).toEqual(true);
  });

  it("should render a <h1 /> element with the Heading class", () => {
    const header = wrapper.find("h1");

    expect(header).toHaveLength(1);
    expect(header.hasClass(css.Heading)).toEqual(true);
  });
});
