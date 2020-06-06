import React from "react";
import { shallow } from "enzyme";

import CategoryList from "./CategoryList";
import Category from "./Category";

describe("<CategoryList />", () => {
  let wrapper;
  const list = [
    {
      id: 1,
      heading: "Test 1",
      collection: ["test"],
    },
    {
      id: 2,
      heading: "Test 2",
      collection: ["test"],
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<CategoryList list={list} />);
  });

  it("should render two <Category /> elements", () => {
    const cat = wrapper.find(Category);

    expect(cat).toHaveLength(2);
  });
});
