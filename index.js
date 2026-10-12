const express = require("express");
const { default: mongoose } = require("mongoose");
const StudentController = require("./app/Controller/StudentController");
const TeacherController = require("./app/Controller/TeacherController")
const AuthController = require("./app/Controller/AuthController");
const { authMiddleware } = require("./app/middleware/authMiddleware");
const { PORT } = require("./app/utils/constants.utils")

const app = express();

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/studentDB")

app.get("/", (req, res) => {
  res.send("Welcome to Routing Project")
});

app.get("/about", (req, res) => {
  res.send("Something is happening here...")
});

app.post("/student", StudentController.create);
app.get("/student", [authMiddleware], StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);

app.post("/teacher", TeacherController.create);
app.get("/teacher", TeacherController.readAll);
app.get("/teacher/:id", TeacherController.readOne);
app.put("/teacher/:id", TeacherController.update);
app.delete("/teacher/:id", TeacherController.destroy);

app.post("/register", AuthController.register);
app.post("/login", AuthController.login);


app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
