import themeActionsTypes from "./theme.type";

const getThemeActions = (dispatch) => ({
  changeTheme: (themeId) =>
    dispatch({ type: themeActionsTypes.CHANGE_THEME, payload: themeId }),
});

export default getThemeActions;
