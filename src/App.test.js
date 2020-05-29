import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Hygge from "./containers/Hygge";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a <Hygge /> element", () => {
    expect(wrapper.find(Hygge)).toHaveLength(1);
  });
});
