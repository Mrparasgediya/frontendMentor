import React from "react";
import * as S from "./SearchInput.styles";

function SearchInput() {
  return (
    <S.SearchInput>
      <S.SearchIcon />
      <S.Label>
        <S.Input type="text" required placeholder="Search for a country..." />
      </S.Label>
    </S.SearchInput>
  );
}

export default SearchInput;
