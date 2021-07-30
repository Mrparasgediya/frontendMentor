export const removeTodoFromTodos = (todos, todoId) => {
  const newTodos = todos;
  if (newTodos[todoId]) {
    delete newTodos[todoId];
  }
  return newTodos;
};

export const removeTodoFromTodoIds = (todosIds, todoId) => {
  const newTodosIds = todosIds;
  const todoIdIdx = newTodosIds.indexOf(todoId);
  if (todoIdIdx !== -1) {
    newTodosIds.splice(todoIdIdx, 1);
  }
  return newTodosIds;
};

export const toggleCompleteTodoToState = (todos, todoId) => {
  const updatedTodos = todos;
  const foundTodo = updatedTodos[todoId];
  if (foundTodo) foundTodo.completed = !foundTodo.completed;
  return todos;
};

export const generateTodoFromText = (
  todoText,
  lastTodoId,
  completed = false
) => ({
  id: lastTodoId + 1,
  text: todoText,
  completed,
  createdAt: Date.now(),
});

export const parseTodosIdsToInt = (ids) => ids.map((id) => parseInt(id));

export const getTodosIdsFromFilter = (todos, todosIds, filter) => {
  if (filter === "active")
    return todosIds.filter((todoId) => !todos[todoId].completed);
  if (filter === "completed")
    return todosIds.filter((todoId) => todos[todoId].completed);
  return todosIds;
};
