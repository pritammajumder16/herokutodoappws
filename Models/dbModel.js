const mongoose = require("mongoose");
const dbURI = require("../config/keys");
mongoose.connect(dbURI.mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const todoSchema = new mongoose.Schema({
  todo: String,
  isSelected: Boolean,
});
const selectedTodoSchema = new mongoose.Schema({
  todo: String,
  index: Number,
});
const todoModel = mongoose.model("todo", todoSchema);
const selectedTodoModel = mongoose.model("selectedTodo", selectedTodoSchema);
module.exports = { todoModel: todoModel, selectedTodoModel: selectedTodoModel };
