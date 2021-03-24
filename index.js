const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 2000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Deploy Node JS Server");
});

app.listen(port, () => console.log(`api active at port ${port}`));
