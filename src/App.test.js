import React from "react";
import { shallow } from "enzyme";
import * as redux from "react-redux";

import App from "./App";
import css from "./App.module.css";
import Menu from "./containers/Menu/Menu";
import logo from "./assets/snowflake.png";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    const spy = jest.spyOn(redux, "useDispatch");
    spy.mockReturnValue(jest.fn);

    wrapper = shallow(<App />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render a <Menu /> element", () => {
    const menu = wrapper.find(Menu);

    expect(menu).toHaveLength(1);
  });

  it("should render an <img /> element with the correct class and src", () => {
    const img = wrapper.find("img");

    expect(img).toHaveLength(1);
    expect(img.hasClass(css.Logo)).toEqual(true);
    expect(img.prop("src")).toEqual(logo);
    expect(img.prop("alt")).toEqual("Logo");
  });
});
