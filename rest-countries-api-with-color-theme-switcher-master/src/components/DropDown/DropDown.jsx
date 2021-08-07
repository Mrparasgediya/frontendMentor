import { CountryContext } from "contexts/country/country.context";
import React, { useContext } from "react";
import * as S from "./DropDown.styles";
import DropDownList from "./DropDownList/DropDownList";

function DropDown() {
  const {
    countryState: { regions, currentRegion, showDropDown },
    countryActions: { setCurrentRegion, toggleShowDropDown },
  } = useContext(CountryContext);

  return (
    <S.DropDown>
      <S.DropDownSelectedOption onClick={toggleShowDropDown}>
        <S.CurrentRegionText>
          {currentRegion === "all" ? "Filter by Region" : currentRegion}
        </S.CurrentRegionText>
        {showDropDown ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropDownSelectedOption>
      {showDropDown && (
        <DropDownList
          options={regions}
          handleOptionClick={(selectedRegion) => {
            setCurrentRegion(selectedRegion.toLowerCase());
            toggleShowDropDown();
          }}
        />
      )}
    </S.DropDown>
  );
}

export default DropDown;
