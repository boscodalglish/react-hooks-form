import React from "react";
import { configure, mount, shallow, render } from "enzyme";
import { Form } from "./Form";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Form", () => {
  it("should have an email field", () => {
    const container = shallow(<Form />);
    expect(container.find('input[type="email"]').length).toEqual(1);
  });

  it("should have proper props for email field", () => {
    const container = shallow(<Form />);
    expect(container.find('input[type="email"]').props()).toEqual({
      label: "Email",
      placeholder: "Enter Email",
      name: "multipleErrorInput5",
      type: "email",
      autoCorrect: "off",
      autoCapitalize: "off"
      // value: "dalglish@gmailc.om"
    });
  });

  it("should set the password value on change event with trim", () => {
    const container = shallow(<Form />);
    container
      .find('input[type="email"]')
      .last()
      .simulate("change", {
        target: {
          value: "somenewpssword@gm "
        }
      });
    expect(
      container
        .find('input[type="email"]')
        .last()
        .prop("value")
    ).toEqual("somenewpssword");
  });

  // it("should set the email value on change event with trim", () => {
  //   const container = mount(<Form />);
  //   container.find('input[type="email"]')({
  //     target: {
  //       value: "somenewpassword@fjj.com"
  //     }
  //   });
  //   expect(container.find('input[type="email"]').prop("value")).toEqual(
  //     "somenewpassword@fjj.com "
  //   );
  // });

  // it("isEmailValid should return false if email is invalid", () => {
  //   expect(Form().isEmailValid("notvalidemail")).toBeFalsy();
  //   expect(Form().isEmailValid("notvalidemail.aswell")).toBeFalsy();
  // });
  // it("isEmailValid should return false if email is valid", () => {
  //   expect(Form().isEmailValid("validemail@gmail.com")).toBeTruthy();
  // });

  // it("should have the login disabled by default", () => {
  //   const container = mount(<Form />);
  //   expect(
  //     container.find('input[type="submit"]').prop("disabled")
  //   ).toBeTruthy();
  // });

  // it("should call the dispatch function and disable the submit button on button click", () => {
  //   const container = mount(<Form />);
  //   container.find('input[type="submit"]').simulate("click");
  //   expect(
  //     container.find('input[type="submit"]').prop("disabled")
  //   ).toBeTruthy();
  //   expect(initialProps.dispatch).toHaveBeenCalledTimes(1);
  // });
});
