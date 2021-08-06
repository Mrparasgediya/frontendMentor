import React from "react";
import * as S from "./DropDownList.styles.js";

function DropDownList({ options, handleOptionClick }) {
  return (
    <S.DropDownList>
      {options.map((option, idx) => (
        <S.DropDownListItem onClick={() => handleOptionClick(option)} key={idx}>
          {option}
        </S.DropDownListItem>
      ))}
    </S.DropDownList>
  );
}

export default DropDownList;
