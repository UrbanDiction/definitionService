/* eslint-disable */
import React from "react";
import { shallow, mount } from "enzyme"; // mount removed for renderer
//import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils';
import App from "../src/App.jsx";
import Definition from "../src/components/Definition.jsx"
import VoteButtonContainer from "../src/components/VoteButtonContainer.jsx"
import UpvoteButton from "../src/components/UpvoteButton.jsx"
import DefinitionList from "../src/components/DefinitionList.jsx"

it("works", () => {
  expect(App).toEqual(App);
});

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toEqual(shallow(<App />))
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


test('VoteButtonContainer toggles buttonToggle property when vote button is clicked', () => {
  const toggleButton = jest.fn();
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
    <Definition data={testData} toggleButton={toggleButton} />
  );
  let p = wrapper.find('UpvoteButton');
  p.simulate('click')
  p = wrapper.find('DownvoteButton')
  p.simulate('click')
  p.simulate('click')
})


















