/* eslint-disable */
import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import App from "../src/App.jsx";
import Definition from "../src/components/Definition.jsx"

it("works", () => {
  expect(App).toEqual(App);
});

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});



test('Definition component renders text of definition', () => {
  const testData = {
    created_by: "Nick",
    created_date: "2017-08-02",
    definition: "test def",
    downvotes: 1,
    example: "test example",
    hash_tags: "test",
    id: 1,
    upvotes: 1,
    word_id: 1
  }
  const wrapper = mount(
    <Definition data={testData} />
  );

  const p = wrapper.find('.single_def');

  expect(p.text()).toBe("test def")
})

test('Definition component renders text of definition creator', () => {
  const testData = {
    created_by: "Nick",
    created_date: "2017-08-02",
    definition: "test def",
    downvotes: 1,
    example: "test example",
    hash_tags: "test",
    id: 1,
    upvotes: 1,
    word_id: 1
  }
  const wrapper = mount(
    <Definition data={testData} />
  );

  const p = wrapper.find('.author');

  expect(p.text()).toBe("Nick")
})














