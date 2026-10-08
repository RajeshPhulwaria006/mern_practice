const express = require("express");
const StudentController = require("./app/Controller/StudentController")
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Routing Project 🐱‍👤");
});

app.get("/about", (req, res) => {
  res.send("Something is happening here...");
});

app.post("/student", StudentController.create())

app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
