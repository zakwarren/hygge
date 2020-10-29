import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Menu from "./containers/Menu/Menu";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a <Menu /> element", () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
  });
});
