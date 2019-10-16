/* eslint-disable */
import React from "react";
import DefinitionList from "./components/DefinitionList.jsx";

const fetch = require("node-fetch");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
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
        this.setState({ data: definitionQuery });
        console.log(definitionQuery);
      });
  }
  // eslint-disable-next-line
  render() {
    return (
      <div>
        <DefinitionList data={this.state.data} />
      </div>
    );
  }
}

export default App;
