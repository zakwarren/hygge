import React from "react";
import { shallow } from "enzyme";

import css from "./HyggeList.module.css";
import HyggeList from "./HyggeList";
import HyggeImage from "./HyggeImage";

describe("<HyggeList />", () => {
  let wrapper;
  const list = [
    {
      id: 1,
      display: true,
      isExpanded: false,
      image: "test.png",
      attribution: "Test",
    },
    {
      id: 2,
      display: true,
      isExpanded: false,
      image: "test2.png",
      attribution: "Test 2",
    },
  ];
  const clickFn = jest.fn;

  beforeEach(() => {
    wrapper = shallow(
      <HyggeList list={list} wrap={false} clickHygge={clickFn} />
    );
  });

  it("should render a <div /> element with the HyggeList class", () => {
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.HyggeList)).toEqual(true);
    expect(div.hasClass(css.Wrap)).toEqual(false);
  });

  it("should render with the Wrap class when wrap is set to true", () => {
    wrapper.setProps({ wrap: true });
    const div = wrapper.find("div");

    expect(div).toHaveLength(1);
    expect(div.hasClass(css.Wrap)).toEqual(true);
  });

  it("should render two <HyggeImage /> elements", () => {
    const img = wrapper.find(HyggeImage);

    expect(img).toHaveLength(2);
  });
});
