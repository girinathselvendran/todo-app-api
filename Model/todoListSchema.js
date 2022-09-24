const mongoose = require("mongoose");

const TodoList = new mongoose.Schema(
  {
    userEmailId: { type: String },
    todoList: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("todoList", TodoList);
