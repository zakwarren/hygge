import React from "react";
import { shallow } from "enzyme";

import css from "./Modal.module.css";
import Modal from "./Modal";

describe("<Modal />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal closeFn={jest.fn}>
        <p>Test</p>
      </Modal>
    );
  });

  it("should render two <div /> elements with the correct classes", () => {
    const divs = wrapper.find("div");

    expect(divs).toHaveLength(2);
    expect(divs.get(0).props.className).toEqual(css.Modal);
    expect(divs.get(1).props.className).toEqual(css.Content);
  });

  it("should render a <span /> element with the correct class and content", () => {
    const span = wrapper.find("span");

    expect(span).toHaveLength(1);
    expect(span.hasClass(css.Close)).toEqual(true);
    expect(span.text()).toEqual("×");
  });

  it("should render a <section /> element", () => {
    const section = wrapper.find("section");

    expect(section).toHaveLength(1);
  });

  it("should render the child element correctly", () => {
    const p = wrapper.find("p");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("Test");
  });
});
