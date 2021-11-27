import React from "react";
import { shallow } from "enzyme";
import Form from "./form";

describe("Form", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
