import React from "react";
import * as S from "./Header.styles";

import ThemeSwitch from "components/ThemeSwitch/ThemeSwitch.component";

function Header() {
  return (
    <S.Header aria-label="header">
      <S.HeadingContainer>
        <S.Heading>Social media dashboard</S.Heading>
        <S.HeadingSubText>total followers: 23,004</S.HeadingSubText>
      </S.HeadingContainer>
      <hr />
      <S.ThemeSwitchContainer>
        <S.ThemeSwitchText>Dark Mode</S.ThemeSwitchText>
        <ThemeSwitch />
      </S.ThemeSwitchContainer>
    </S.Header>
  );
}

export default Header;
