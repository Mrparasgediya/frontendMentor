import todoActionsTypes from "./todo.types";
import {
  getTodosIdsFromFilter,
  removeTodoFromTodoIds,
  removeTodoFromTodos,
  toggleCompleteTodoToState,
} from "./todo.utils";

const todoReducer = (state, action) => {
  let newTodos;

  switch (action.type) {
    case todoActionsTypes.ADD_TODO:
      let { id, ...restTodo } = action.payload;
      return {
        ...state,
        todos: { [id]: restTodo, ...state.todos },
        lastTodoId: state.lastTodoId + 1,
        todosIds: [id, ...state.todosIds],
      };

    case todoActionsTypes.REMOVE_TODO:
      return {
        ...state,
        todos: { ...removeTodoFromTodos(state.todos, action.payload) },
        todosIds: [...removeTodoFromTodoIds(state.todosIds, action.payload)],
      };

    case todoActionsTypes.TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todos: { ...toggleCompleteTodoToState(state.todos, action.payload) },
      };

    case todoActionsTypes.CHANGE_FILTER:
      console.log(action.payload);
      return {
        ...state,
        currentFilter: action.payload,
      };

    case todoActionsTypes.CLEAR_COMPLETED:
      let newTodosIds = getTodosIdsFromFilter(
        state.todos,
        state.todosIds,
        "active"
      );

      newTodos = newTodosIds.reduce(
        (allTodos, todoId) => ({
          ...allTodos,
          [todoId]: { ...state.todos[todoId] },
        }),
        {}
      );

      return { ...state, todos: newTodos, todosIds: newTodosIds };

    case todoActionsTypes.SET_CURRENT_TODOS_IDS:
      return {
        ...state,
        currentTodosIds: action.payload,
      };
    case todoActionsTypes.SET_TODOS_IDS:
      return {
        ...state,
        todosIds: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
