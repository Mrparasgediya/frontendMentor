import React from "react";
import * as S from "./CustomButton.styles";

function CustomButton({ children, isRemoveTagButton, ...otherProps }) {
  return (
    <S.CustomButton btnType="remove" {...otherProps}>
      {children}
    </S.CustomButton>
  );
}

export default CustomButton;
