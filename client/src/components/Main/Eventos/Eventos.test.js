import React from "react";
import { shallow } from "enzyme";
import Eventos from "./Eventos";

describe("Eventos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Eventos />);
    expect(wrapper).toMatchSnapshot();
  });
});
