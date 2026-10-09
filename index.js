const express = require("express");
const StudentController = require("./app/Controller/StudentController");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 8000;

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/studentDB")

app.get("/", (req, res) => {
  res.send("Welcome to Routing Project 🐱‍👤");
});

app.get("/about", (req, res) => {
  res.send("Something is happening here...");
});

app.post("/student", StudentController.create);
app.get("/student", StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);

app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
