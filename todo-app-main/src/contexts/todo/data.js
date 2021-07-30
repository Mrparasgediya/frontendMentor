const { generateTodoFromText } = require("./todo.utils");

const todos = [
  generateTodoFromText("Complete online javascript course", 0, true),
  generateTodoFromText("Jog around the park 3x", 1),
  generateTodoFromText("10 minutes of meditation", 2),
  generateTodoFromText("Read for 1 hour", 3),
  generateTodoFromText("Pick up groceries", 4),
  generateTodoFromText("Complete Todo App on Frontend Mentor", 5),
];

export default todos.reduce(
  (allTodos, { id, ...restTodo }) => ({
    ...allTodos,
    [parseInt(id)]: restTodo,
  }),
  {}
);
