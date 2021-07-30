import { createContext, useState } from "react";
import themes from "themes/themes";

const themeNamesWithIds = Object.keys(themes).reduce(
  (allIds, currentThemeKey) => ({
    ...allIds,
    [currentThemeKey]: themes[currentThemeKey].id,
  }),
  {}
);

const DEFAULT_THEME = themes.light;

export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = () => {
    const themeToSet =
      theme.id === themeNamesWithIds.light ? themes.dark : themes.light;
    setTheme(themeToSet);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
