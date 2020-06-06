import React from "react";
import { shallow } from "enzyme";

import css from "./Backdrop.module.css";
import Backdrop from "./Backdrop";

describe("<Backdrop />", () => {
  let wrapper;
  const clicked = jest.fn;

  beforeEach(() => {
    wrapper = shallow(<Backdrop clicked={clicked} show={false} />);
  });

  it("should render nothing if show is false", () => {
    expect(wrapper.get(0)).toBeNull();
  });

  it("should render a div with the Backdrop class when show is true", () => {
    wrapper.setProps({ show: true });
    expect(wrapper.hasClass(css.Backdrop)).toEqual(true);
    expect(
      wrapper.contains(<div className={css.Backdrop} onClick={clicked}></div>)
    ).toEqual(true);
  });
});
