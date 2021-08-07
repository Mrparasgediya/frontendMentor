import React from "react";
import * as S from "./CustomButton.styles";

function CustomButton({ children, onClick }) {
  return <S.CustomButton onClick={onClick}>{children}</S.CustomButton>;
}

export default CustomButton;
