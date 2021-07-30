import React from "react";
import * as S from "./CircleIcon.styles";
import { ReactComponent as CheckIcon } from "assets/images/icon-check.svg";

function CircleIcon({ disabled, isCompleted, toggleComplete }) {
  return (
    <S.CircleIcon
      completed={isCompleted}
      onClick={toggleComplete}
      isDisabled={disabled}
    >
      {isCompleted ? <CheckIcon /> : <S.InnerCircle />}
    </S.CircleIcon>
  );
}

export default CircleIcon;
