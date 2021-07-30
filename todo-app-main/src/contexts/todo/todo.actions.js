import todoActionsTypes from "./todo.types";
import { generateTodoFromText } from "./todo.utils";

const getTodosActionsFromStateAndDispatch = (state, dispatch) => ({
  addTodo: (todoText) =>
    dispatch({
      type: todoActionsTypes.ADD_TODO,
      payload: generateTodoFromText(todoText, state.lastTodoId),
    }),
  removeTodo: (todoId) =>
    dispatch({
      type: todoActionsTypes.REMOVE_TODO,
      payload: todoId,
    }),
  toggleCompleteTodo: (todoId) =>
    dispatch({
      type: todoActionsTypes.TOGGLE_COMPLETE_TODO,
      payload: todoId,
    }),
  changeFilter: (newFilter) =>
    dispatch({
      type: todoActionsTypes.CHANGE_FILTER,
      payload: newFilter,
    }),
  clearCompleted: () => dispatch({ type: todoActionsTypes.CLEAR_COMPLETED }),
  setTodosIds: (todosIds) =>
    dispatch({ type: todoActionsTypes.SET_TODOS_IDS, payload: todosIds }),
});

export default getTodosActionsFromStateAndDispatch;
