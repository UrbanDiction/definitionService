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
      body: JSON.stringify({ word: "architecto" }),
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
      });
  }
  // eslint-disable-next-line
  render() {
    return (
      <div>


      <div>
        <DefinitionList data={this.state.data} />
      </div>
      </div>
    );
  }
}

export default App;
