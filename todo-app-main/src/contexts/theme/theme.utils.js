import themes, { themesIds } from "themes/themes";

export const getNextTheme = (currentTheme) =>
  currentTheme.id === themesIds.light ? themes.dark : themes.light;
