import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Menu from "./components/Menu/Menu";
import Hygge from "./containers/Hygge/Hygge";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a <Menu /> element", () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
  });

  it("should render a <Hygge /> element", () => {
    expect(wrapper.find(Hygge)).toHaveLength(1);
  });
});
