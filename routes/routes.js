const express = require("express");

const routes = express.Router();
const { signup, signIn } = require("../controller/auth");
const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoList");

//signup signin
routes.post("/signup", signup);
routes.post("/signin", signIn);

//todo list
routes.get("/gettodo/:email", getAllTodo);
routes.post("/createtodo", createTodo);
routes.put("/updatetodo/:id", updateTodo);
routes.delete("/deletetodo/:id", deleteTodo);

module.exports = routes;
