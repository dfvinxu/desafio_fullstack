import React from "react";
import { shallow } from "enzyme";
import Filters from "./Filters";

describe("Filters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).toMatchSnapshot();
  });
});
