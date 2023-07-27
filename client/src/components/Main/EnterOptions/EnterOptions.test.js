import React from "react";
import { shallow } from "enzyme";
import EnterOptions from "./EnterOptions";

describe("EnterOptions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnterOptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
