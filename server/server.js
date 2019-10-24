/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/server";
import App from "../client/src/App.jsx";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { queryWordData } = require("../server/models/queryWordData.js");

const app = express();
const port = process.env.PORT || 8001;
const processArgs = process.argv.slice(2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/../public")));
app.get("/:word", (req, res) => {
  queryWordData(req.params.word, (error, wordData) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      const reactString = ReactDOM.renderToString(<App data={wordData} />);
      res.send(reactString);
    }
  });
});

app.listen(port, () => {
  if (processArgs.includes("development")) {
    // eslint-disable-next-line
    console.log("Listening on: ", port);
  }
});
