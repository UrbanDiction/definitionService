import App from "../client/src/App.jsx"

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8001;
const processArgs = process.argv.slice(2);

app.use(express.static(path.join(__dirname, "/../public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/routes.js")(app);

app.get("/definition/word", (req, res) => {
  const word = "nisi";

  const component = ReactDOMServer.renderToString(<App />)

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>UrbanDiction</title>
      </head>
      <body>
        <div id="definitionApp">
          Waiting to load react...
        </div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `
})

app.listen(port, () => {
  if (processArgs.includes("development")) {
    // eslint-disable-next-line
    console.log("Listening on", port);
  }
});
