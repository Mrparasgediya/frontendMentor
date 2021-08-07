import React, { useContext, useEffect, useRef } from "react";
import * as S from "./SearchInput.styles";

import _ from "lodash";
import { searchCountryByName } from "utils/country";
import { CountryContext } from "contexts/country/country.context";

function SearchInput() {
  const searchInputRef = useRef();
  const {
    countryState: { countries, regionCountries, currentRegion },
    countryActions: { setCurrentCountries, resetRegionCountries },
  } = useContext(CountryContext);

  useEffect(() => {
    if (currentRegion) {
      searchInputRef.current.value = "";
    }
  }, [currentRegion]);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText.length > 0) {
      const searchedCountries = searchCountryByName(
        searchText,
        countries,
        regionCountries
      );
      setCurrentCountries(searchedCountries);
    } else {
      resetRegionCountries();
    }
  };

  return (
    <S.SearchInput>
      <S.SearchIcon />
      <S.Label>
        <S.Input
          ref={searchInputRef}
          type="text"
          required
          placeholder="Search for a country..."
          onChange={_.debounce(handleSearch, 100)}
        />
      </S.Label>
    </S.SearchInput>
  );
}

export default SearchInput;
