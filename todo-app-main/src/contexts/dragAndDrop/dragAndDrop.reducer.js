import dragAndDropActionsTypes from "./dragAndDrop.types";

import { INITIAL_STATE } from "./dragAndDrop.context";

const dragAndDropReducer = (state, action) => {
  switch (action.type) {
    case dragAndDropActionsTypes.SET_ITEM_TO_MOVE:
      return {
        ...state,
        itemToMove: action.payload,
      };

    case dragAndDropActionsTypes.SET_ON_DROPPED_ITEM:
      return {
        ...state,
        onDroppedItem: action.payload,
      };
    case dragAndDropActionsTypes.SET_ITEM_IS_DROPPED:
      return {
        ...state,
        isItemDropped: true,
      };
    case dragAndDropActionsTypes.RESET_DRAG_AND_DROP:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default dragAndDropReducer;
