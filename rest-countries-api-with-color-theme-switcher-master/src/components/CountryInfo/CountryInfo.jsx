import React from "react";
import * as S from "./CountryInfo.styles";

function CountryInfo({ heading, text, hasList, list, onListItemClick }) {
  return (
    <S.CountryInfo hasList={hasList}>
      <S.CountryInfoHeading changePositionToTop={list && list.length >= 6}>
        {heading}:
      </S.CountryInfoHeading>
      {hasList ? (
        <S.CountryList>
          {list.map((listItem, idx) => (
            <S.CountryListItem
              onClick={() => onListItemClick(listItem)}
              key={idx}
            >
              {listItem}
            </S.CountryListItem>
          ))}
        </S.CountryList>
      ) : (
        <S.CountryInfoText>{text}</S.CountryInfoText>
      )}
    </S.CountryInfo>
  );
}

export default CountryInfo;
