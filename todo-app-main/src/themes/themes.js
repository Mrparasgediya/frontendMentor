import darkTheme from "./dark.theme";
import lightTheme from "./light.theme";

const themes = { light: lightTheme, dark: darkTheme };

export default themes;
export const themesIds = Object.keys(themes).reduce(
  (themeIds, theme) => ({ ...themeIds, [theme]: themes[theme].id }),
  {}
);
