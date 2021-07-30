import React, { useContext } from "react";
import { ThemeContext } from "contexts/theme/theme.context";
import * as S from "./Header.styles";
import { themesIds } from "themes/themes";

function Header() {
  const { themeState, themeActions } = useContext(ThemeContext);
  return (
    <S.Header>
      <S.Heading>TODO</S.Heading>
      {themesIds.light === themeState.theme.id ? (
        <S.MoonIcon onClick={themeActions.toggleTheme} />
      ) : (
        <S.SunIcon onClick={themeActions.toggleTheme} />
      )}
    </S.Header>
  );
}

export default Header;
