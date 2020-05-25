import React from "react";
import { shallow } from "enzyme";

import css from "./HyggeList.module.css";
import HyggeList from "./HyggeList";
import HyggeImage from "./HyggeImage";

describe("<HyggeList />", () => {
  let wrapper;
  const list = [{ id: 1 }, { id: 2 }];

  beforeEach(() => {
    wrapper = shallow(<HyggeList list={list} />);
  });

  it("should render a <div /> element with the HyggeList class", () => {
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.HyggeList)).toEqual(true);
  });

  it("should render two <HyggeImage /> elements", () => {
    const img = wrapper.find(HyggeImage);

    expect(img).toHaveLength(2);
  });
});
