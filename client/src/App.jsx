/* eslint-disable */
import React from "react";
import DefinitionList from "./components/DefinitionList.jsx";

const fetch = require("node-fetch");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line
  render() {
    return (
      <div id="definitionData" initialDefinitionData={JSON.stringify(this.props.data)} >
        <DefinitionList data={this.props.data} />
      </div>
    );
  }
}

export default App;
