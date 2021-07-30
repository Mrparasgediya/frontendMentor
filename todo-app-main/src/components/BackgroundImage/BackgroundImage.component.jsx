import React, { useContext } from "react";
import * as S from "./BackgroundImage.styles";
import { ThemeContext } from "contexts/theme/theme.context";

function BackgroundImage() {
  const { themeState } = useContext(ThemeContext);
  return (
    <S.BackgroundImage src={themeState.theme.image} alt="App-background" />
  );
}

export default BackgroundImage;
