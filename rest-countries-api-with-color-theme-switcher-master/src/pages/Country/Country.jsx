import CountryDetails from "components/CountryDetails/CountryDetails";
import CustomButton from "components/CustomButton/CustomButton";
import useCountry from "hooks/useCountry";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import * as S from "./Country.styles";

function Country() {
  const match = useRouteMatch();
  const history = useHistory();
  const [country, isLoading] = useCountry(match.params.countryName);

  return (
    <S.Container>
      <S.ButtonContainer>
        <CustomButton onClick={() => history.push("/")}>
          <S.IconArrowBack /> <span>Back</span>
        </CustomButton>
      </S.ButtonContainer>
      {country ? (
        <S.CountryContainer>
          <S.CountryImage src={country && country.flag} />
          <CountryDetails country={country} />
        </S.CountryContainer>
      ) : (
        <S.CountryStatusText>
          {isLoading
            ? "Loading..."
            : "Country {match.params.countryName} not found :("}
        </S.CountryStatusText>
      )}
    </S.Container>
  );
}

export default Country;
