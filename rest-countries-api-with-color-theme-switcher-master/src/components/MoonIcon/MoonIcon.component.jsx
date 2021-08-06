import React from "react";
import * as S from "./MoonIcon.styles";

function MoonIcon({ isActive }) {
  return isActive ? <S.ActiveMoonIcon /> : <S.MoonIcon />;
}

export default MoonIcon;
