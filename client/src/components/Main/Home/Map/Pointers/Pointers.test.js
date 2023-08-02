import React from "react";
import { shallow } from "enzyme";
import Pointers from "./Pointers";

describe("Pointers", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pointers />);
    expect(wrapper).toMatchSnapshot();
  });
});
