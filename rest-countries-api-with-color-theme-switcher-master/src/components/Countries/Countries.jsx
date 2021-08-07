import CountryCard from "components/CountryCard/CountryCard.component";
import { CountryContext } from "contexts/country/country.context";
import React, { useContext } from "react";
import * as S from "./Countries.styles";

function Countries() {
  const {
    countryState: { currentCountries, countries },
  } = useContext(CountryContext);

  return (
    <S.CounriesContainer>
      {currentCountries.map((countryCode, idx) => (
        <CountryCard
          key={idx}
          country={{ code: countryCode, ...countries[countryCode] }}
        ></CountryCard>
      ))}
    </S.CounriesContainer>
  );
}

export default Countries;
