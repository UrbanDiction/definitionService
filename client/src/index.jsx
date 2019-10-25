import React from "react"; // eslint-disable-line
import ReactDOM from "react-dom";
import App from "./App.jsx"; // eslint-disable-line
import "../../node_modules/bootswatch/dist/flatly/bootstrap.css";

ReactDOM.hydrate(
  <App
    data={JSON.parse(
      document
        .getElementById("definitionData")
        .getAttribute("initialDefinitionData")
    )}
  />,
  document.getElementById("definitionApp")
);
