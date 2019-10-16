/* eslint-disable */
import React from "react";
import Definition from "./components/Definition.jsx";

const fetch = require("node-fetch");

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    fetch("/definition/word", {
      method: "POST",
      body: JSON.stringify({ word: "test" }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        // console.log(data);
        return data.json();
      })
      .then(({ definitionQuery }) => {
        console.log(definitionQuery[0].definition);
      });
  }
  // eslint-disable-next-line
  render() {
    return (
      <div>
        <Definition />
      </div>
    );
  }
}

export default App;
