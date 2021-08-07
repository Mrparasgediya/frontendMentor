import darkTheme from "./dark.theme";
import lightTheme from "./light.theme";

const themes = {
  [lightTheme.id]: lightTheme,
  [darkTheme.id]: darkTheme,
};

export const themesIdsAndName = Object.keys(themes).reduce(
  (data, currThemeId) => ({
    ...data,
    [themes[currThemeId].name.toLowerCase()]: currThemeId,
  }),
  {}
);
export default themes;
