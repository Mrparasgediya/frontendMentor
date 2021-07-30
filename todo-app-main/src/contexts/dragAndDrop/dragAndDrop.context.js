import dragAndDropReducer from "./dragAndDrop.reducer";
import dragAndDropActionsTypes from "./dragAndDrop.types";

import { createContext, useReducer } from "react";

export const DragAndDropContext = createContext();

export const INITIAL_STATE = {
  itemToMove: undefined,
  onDroppedItem: undefined,
  isItemDropped: false,
};

const DragAndDropProvider = ({ children }) => {
  const [dragAndDropState, dispatch] = useReducer(
    dragAndDropReducer,
    INITIAL_STATE
  );

  const dragAndDropActions = {
    setItemToMove: (data) =>
      dispatch({
        type: dragAndDropActionsTypes.SET_ITEM_TO_MOVE,
        payload: data,
      }),
    setOnDroppedItem: (data) => {
      return dispatch({
        type: dragAndDropActionsTypes.SET_ON_DROPPED_ITEM,
        payload: data,
      });
    },
    setItemIsDropped: () =>
      dispatch({ type: dragAndDropActionsTypes.SET_ITEM_IS_DROPPED }),
    resetDragAndDrop: () =>
      dispatch({ type: dragAndDropActionsTypes.RESET_DRAG_AND_DROP }),
  };

  return (
    <DragAndDropContext.Provider
      value={{ dragAndDropState, dragAndDropActions }}
    >
      {children}
    </DragAndDropContext.Provider>
  );
};

export default DragAndDropProvider;
