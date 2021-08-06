import CountryCard from "components/CountryCard/CountryCard.component";
import React from "react";
import * as S from "./Countries.styles";

function Countries({ countries }) {
  return (
    <S.CounriesContainer>
      {countries.map((country, idx) => (
        <CountryCard key={idx} country={country}></CountryCard>
      ))}
    </S.CounriesContainer>
  );
}

export default Countries;
