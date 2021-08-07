import MoonIcon from "components/MoonIcon/MoonIcon.component";
import { ThemeContext } from "contexts/theme/theme.context";
import React, { useContext } from "react";
import * as S from "./Header.styles";

function Header() {
  const {
    themeState: { availableThemes, currentTheme },
    themeActions: { changeTheme },
  } = useContext(ThemeContext);

  return (
    <S.Header>
      <S.Container>
        <S.HeaderHeading>Where in the world?</S.HeaderHeading>
        <S.ChangeThemeContainer
          onClick={() =>
            changeTheme(
              availableThemes.light === currentTheme
                ? availableThemes.dark
                : availableThemes.light
            )
          }
        >
          <MoonIcon />
          <S.ChangeThemeText>dark mode</S.ChangeThemeText>
        </S.ChangeThemeContainer>
      </S.Container>
    </S.Header>
  );
}

export default Header;
