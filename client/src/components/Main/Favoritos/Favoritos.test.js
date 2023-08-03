import React from "react";
import { shallow } from "enzyme";
import Favoritos from "./Favoritos";

describe("Favoritos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Favoritos />);
    expect(wrapper).toMatchSnapshot();
  });
});
