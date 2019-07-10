const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("./library/mongoose");

const app = express();
app.use(bodyParser.json());
app.use("/", routes);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("seni dinliyorum albayım"));