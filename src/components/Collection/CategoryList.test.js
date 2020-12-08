import React from "react";
import { shallow } from "enzyme";

import CategoryList from "./CategoryList";
import Category from "./Category";

describe("<CategoryList />", () => {
  let wrapper;
  const list = [
    {
      name: "Test 1",
      color: "#48d0e2",
      collection: ["test"],
      onClick: jest.fn,
    },
    {
      name: "Test 2",
      color: "#db5b5b",
      collection: ["test"],
      onClick: jest.fn,
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
