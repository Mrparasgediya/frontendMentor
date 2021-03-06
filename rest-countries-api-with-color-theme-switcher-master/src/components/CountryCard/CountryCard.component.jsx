import React from "react";
import * as S from "./CountryCard.styles";
import { getConvertedPopulation } from "utils/country";
import { useHistory } from "react-router-dom";
import CountryInfoList from "components/CountryInfoList/CountryInfoList";
import LazyImage from "components/LazyImage/LazyImage";

function CountryCard({ country }) {
  const history = useHistory();
  const { flag, name } = country;
  const infoList = ["population", "capital", "region"].map((heading) => ({
    heading,
    text:
      heading === "population"
        ? getConvertedPopulation(country[heading])
        : country[heading],
  }));

  return (
    <S.CountryCard onClick={() => history.push(`/countries/${name}`)}>
      <LazyImage src={flag} alt={`${name}-flag`} />
      <S.CountryDataContainer>
        <S.CountryName>{name}</S.CountryName>
        <CountryInfoList infoList={infoList} />
      </S.CountryDataContainer>
    </S.CountryCard>
  );
}

export default CountryCard;
