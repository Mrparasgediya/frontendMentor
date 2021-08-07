import React, { useRef } from "react";
import * as S from "./CountryInfo.styles";

function CountryInfo({ heading, text, hasList, list, onListItemClick }) {
  const ref = useRef();

  return (
    <S.CountryInfo hasList={hasList}>
      <S.CountryInfoHeading
        changePositionToTop={
          ref && ref.current && ref.current.clientHeight > 50
        }
      >
        {heading}:
      </S.CountryInfoHeading>
      {hasList ? (
        <S.CountryList ref={ref}>
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
