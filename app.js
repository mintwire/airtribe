const express = require("express");
const bodyParser = require("body-parser");
const routes = require("express").Router();
const taskInfo = require("./routes/taskInfo");

const app = express();
app.use(routes);
app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Airtibe Task Manager App");
});

routes.use("/tasks", taskInfo);

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server has started Successfully");
  } else {
    console.log("error Occured");
  }
});
