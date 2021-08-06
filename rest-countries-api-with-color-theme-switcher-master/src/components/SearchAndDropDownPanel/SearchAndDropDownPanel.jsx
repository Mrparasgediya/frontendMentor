import DropDown from "components/DropDown/DropDown";
import SearchInput from "components/SearchInput/SearchInput.component";
import React from "react";
import * as S from "./SearchAndDropDownPanel.styles";

function SearchAndDropDownPanel({ countries }) {
  return (
    <S.SearchAndDropDownPanelContainer>
      <SearchInput />
      <DropDown countries={countries} />
    </S.SearchAndDropDownPanelContainer>
  );
}

export default SearchAndDropDownPanel;
