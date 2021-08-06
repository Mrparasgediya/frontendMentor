import CountryInfo from "components/CountryInfo/CountryInfo";
import CountryInfoList from "components/CountryInfoList/CountryInfoList";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getConvertedPopulation } from "utils/country";
import * as S from "./Country.styles";

function Country() {
  const [country, setCountry] = useState();
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const country = match.params.countryName;
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
      );
      const data = await res.json();
      setCountry(data[0]);
    };
    fetchCountry();
  }, [match.params.countryName]);

  useEffect(() => {
    const fetchCountryBorders = async () => {
      const bordersRes = await Promise.all(
        country.borders.map((borderCountryCode) =>
          fetch(
            `https://restcountries.eu/rest/v2/alpha/${borderCountryCode}?fields=name`
          )
        )
      );
      const bordersData = await Promise.all(
        bordersRes.map((res) => res.json())
      );

      setCountryBorders(bordersData.map((border) => border.name));
    };
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

      fetchCountryBorders();
    }
  }, [country]);

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Button onClick={() => history.push("/")}>
          <S.IconArrowBack /> <span>Back</span>
        </S.Button>
      </S.ButtonContainer>
      {country && (
        <S.CountryContainer>
          <S.CountryImage src={country && country.flag} />
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
                list={countryBorders}
                onListItemClick={(country) =>
                  history.push(`/countries/${country}`)
                }
              />
            </S.BorderCountriesContainer>
          </S.CountryDetailsContainer>
        </S.CountryContainer>
      )}
    </S.Container>
  );
}

export default Country;
