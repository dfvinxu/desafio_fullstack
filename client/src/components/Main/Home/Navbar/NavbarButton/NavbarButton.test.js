import React from "react";
import { shallow } from "enzyme";
import NavbarButton from "./NavbarButton";

describe("NavbarButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NavbarButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
