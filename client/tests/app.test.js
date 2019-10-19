/* eslint-disable */
import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import App from "../src/App.jsx";

it("works", () => {
  expect(App).toEqual(App);
});

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
