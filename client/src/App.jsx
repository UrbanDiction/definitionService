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
    fetch("http://localhost:8001/definition/word", {
      method: "POST",
      body: JSON.stringify({ word: "dolor" }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        return data.json();
      })
      .then(({ definitionQuery }) => {
        this.setState({ data: definitionQuery });
      })
      .catch(() => {
        // handle error
      })
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
