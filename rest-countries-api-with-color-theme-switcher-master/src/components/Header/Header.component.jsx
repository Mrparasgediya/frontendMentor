import MoonIcon from "components/MoonIcon/MoonIcon.component";
import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderHeading>Where in the world?</S.HeaderHeading>
        <S.ChangeThemeContainer>
          <MoonIcon />
          <S.ChangeThemeText>dark mode</S.ChangeThemeText>
        </S.ChangeThemeContainer>
      </S.Container>
    </S.Header>
  );
}

export default Header;
