const todoListSchema = require("../Model/todoListSchema");
const UserData = require("../Model/usersSchema");

const getAllTodo = async (req, res) => {
  try {
    let response = await todoListSchema.find();

    let email = req.params.email;

    let result = response.filter((item) => item.userEmailId === email);

    return res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const todoList = new todoListSchema({ ...req.body });
    await todoList.save();

    let response = await todoListSchema.find();

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };

    await todoListSchema.findByIdAndUpdate(id, {
      todoList: req.body.data,
    });
    let response = await todoListSchema.find();

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todoListSchema.findByIdAndDelete({ _id: req.params.id });
    let response = await todoListSchema.find();

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

module.exports = { createTodo, updateTodo, deleteTodo, getAllTodo };
