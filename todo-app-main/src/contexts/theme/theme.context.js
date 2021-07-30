import { createContext, useReducer } from "react";
import themeReducer from "./theme.reducer";
import themes from "themes/themes";
import themeActionsTypes from "./theme.types";

const initialState = {
  theme: themes.light,
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initialState);

  const themeActions = {
    toggleTheme: () =>
      dispatch({
        type: themeActionsTypes.TOGGLE_THEME,
      }),
  };

  return (
    <ThemeContext.Provider value={{ themeState, themeActions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
