import { createContext, useContext, useEffect, useReducer } from "react";
import todoReducer from "./todo.reducer";
import todoActionsTypes from "./todo.types";
import { getTodosIdsFromFilter, parseTodosIdsToInt } from "./todo.utils";
import data from "./data";
import { DragAndDropContext } from "contexts/dragAndDrop/dragAndDrop.context";
import getTodosActionsFromStateAndDispatch from "./todo.actions";

const parsedInitialIds = parseTodosIdsToInt(Object.keys(data));

const initialState = {
  todos: data,
  todosIds: parsedInitialIds,
  currentTodosIds: parsedInitialIds,
  currentFilter: "all",
  lastTodoId: 6,
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todosState, dispatch] = useReducer(todoReducer, initialState);
  const { dragAndDropState, dragAndDropActions } =
    useContext(DragAndDropContext);
  const todosActions = getTodosActionsFromStateAndDispatch(
    todosState,
    dispatch
  );

  useEffect(() => {
    const { isItemDropped, itemToMove, onDroppedItem } = dragAndDropState;
    if (isItemDropped) {
      const newIds = todosState.todosIds;
      const moveItemIdx = newIds.indexOf(itemToMove);
      const droppedItemIdx = newIds.indexOf(onDroppedItem);
      // check that drop item and move item is not same
      if (moveItemIdx !== droppedItemIdx) {
        // remove move item from ids
        newIds.splice(moveItemIdx, 1);
        // get new idx of dropped item
        const newDroppedItemIdx = newIds.indexOf(onDroppedItem);
        // swipe dropitem and moveitem ids accouding to index order
        // here we swipe move item after drop item when move item is dropped to bottom
        let middleIds = [onDroppedItem, itemToMove];
        // here we swipe item before drop item when move item is dropped to top
        if (moveItemIdx > newDroppedItemIdx) {
          middleIds = [itemToMove, onDroppedItem];
        }
        // merge ids
        todosActions.setTodosIds([
          ...newIds.slice(0, newDroppedItemIdx),
          ...middleIds,
          ...newIds.slice(newDroppedItemIdx + 1),
        ]);
      }
      // reset drag and drop state
      dragAndDropActions.resetDragAndDrop();
    }
  }, [dragAndDropState, todosState.todosIds, todosActions, dragAndDropActions]);

  useEffect(() => {
    if (todosState.todosIds === 0 && todosState.currentFilter !== "all")
      dispatch({ type: todoActionsTypes.CHANGE_FILTER, payload: "all" });

    dispatch({
      type: todoActionsTypes.SET_CURRENT_TODOS_IDS,
      payload: getTodosIdsFromFilter(
        todosState.todos,
        todosState.todosIds,
        todosState.currentFilter
      ),
    });
  }, [todosState.todosIds, todosState.currentFilter, todosState.todos]);

  return (
    <TodoContext.Provider value={{ todosState, todosActions }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
