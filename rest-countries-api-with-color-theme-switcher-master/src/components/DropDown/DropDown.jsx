import React, { useState } from "react";
import { getRegionsFromCountires } from "utils/country";
import * as S from "./DropDown.styles";
import DropDownList from "./DropDownList/DropDownList";

function DropDown({ countries }) {
  const [toggleList, setToggleList] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = ["all", ...getRegionsFromCountires(countries)];
  return (
    <S.DropDown>
      <S.DropDownSelectedOption onClick={() => setToggleList(!toggleList)}>
        <span>
          {selectedRegion === "all" ? "Filter by Region" : selectedRegion}
        </span>
        {toggleList ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}{" "}
      </S.DropDownSelectedOption>
      {toggleList && (
        <DropDownList
          options={regions}
          handleOptionClick={(selectedRegion) => {
            setSelectedRegion(selectedRegion);
            setToggleList(false);
          }}
        />
      )}
    </S.DropDown>
  );
}

export default DropDown;
