import themes, { themesIdsAndName } from "themes/themes";
import getThemeActions from "./theme.actions";
import themeReducer from "./theme.reducer";

const { createContext, useReducer } = require("react");

export const ThemeContext = createContext();

const INITIAL_STATE = {
  themes: themes,
  availableThemes: themesIdsAndName,
  currentTheme: themesIdsAndName.light,
};

const ThemeProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  const themeActions = getThemeActions(dispatch);

  return (
    <ThemeContext.Provider value={{ themeState, themeActions }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
