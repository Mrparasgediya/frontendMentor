import CountryInfo from "components/CountryInfo/CountryInfo";
import CountryInfoList from "components/CountryInfoList/CountryInfoList";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getConvertedPopulation } from "utils/country";
import * as S from "./CountryDetails.styles";

function CountryDetails({ country }) {
  const history = useHistory();
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  useEffect(() => {
    if (country) {
      const firstInfoList = [
        "nativeName",
        "population",
        "region",
        "subregion",
        "capital",
      ].map((heading) => ({
        heading,
        text:
          heading === "population"
            ? getConvertedPopulation(country[heading])
            : country[heading],
      }));
      setFirstList(firstInfoList);
      const secondInfoList = ["topLevelDomain", "currencies", "languages"].map(
        (heading) => ({
          heading,
          text:
            heading === "topLevelDomain"
              ? country[heading].join(" ,")
              : country[heading].map((data) => data.name).join(","),
        })
      );

      setSecondList(secondInfoList);
    }
  }, [country]);

  return (
    <S.CountryDetailsContainer>
      <S.CountryName>{country.name}</S.CountryName>
      <S.CountryInfoMainContainer>
        <S.CountryInfoContainer>
          <CountryInfoList infoList={firstList} fontBig />
        </S.CountryInfoContainer>
        <S.CountryInfoContainer>
          <CountryInfoList infoList={secondList} fontBig />
        </S.CountryInfoContainer>
      </S.CountryInfoMainContainer>
      <S.BorderCountriesContainer>
        <CountryInfo
          heading="border countries"
          hasList
          list={country.borders}
          onListItemClick={(country) => history.push(`/countries/${country}`)}
        />
      </S.BorderCountriesContainer>
    </S.CountryDetailsContainer>
  );
}

export default CountryDetails;
