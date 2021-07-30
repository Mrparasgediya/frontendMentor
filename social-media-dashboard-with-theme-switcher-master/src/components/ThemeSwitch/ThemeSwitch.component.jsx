import React, { useContext } from "react";
import * as S from "./ThemeSwitch.styles";

import { ThemeContext } from "contexts/theme.context";

import darkTheme from "themes/dark.theme";

function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.ThemeSwitch aria-label="change theme switch">
      <S.ThemeSwitchInput type="checkbox" onChange={toggleTheme} />
      <S.ThemeSwitchBall isOn={theme.id === darkTheme.id} />
    </S.ThemeSwitch>
  );
}

export default ThemeSwitch;
