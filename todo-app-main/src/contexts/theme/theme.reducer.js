import themeActionsTypes from "./theme.types";
import { getNextTheme } from "./theme.utils";

const themeReducer = (state, action) => {
  switch (action.type) {
    case themeActionsTypes.TOGGLE_THEME:
      return { ...state, theme: getNextTheme(state.theme) };
    default:
      return state;
  }
};

export default themeReducer;
