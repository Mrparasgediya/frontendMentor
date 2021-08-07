const { default: themeActionsTypes } = require("./theme.type");

const themeReducer = (state, action) => {
  switch (action.type) {
    case themeActionsTypes.CHANGE_THEME:
      return { ...state, currentTheme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
