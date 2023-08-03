import React from "react";
import { shallow } from "enzyme";
import IntermediatePage from "./IntermediatePage";

describe("IntermediatePage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<IntermediatePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
