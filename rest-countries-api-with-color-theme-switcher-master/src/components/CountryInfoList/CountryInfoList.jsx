import React from "react";
import CountryInfo from "components/CountryInfo/CountryInfo";
import * as S from "./CountryInfoList.style";

function CountryInfoList(props) {
  const { infoList, fontBig } = props;
  return (
    <S.CountryInfoListContainer fontBig={fontBig}>
      {infoList.map((info, idx) => (
        <CountryInfo key={idx} heading={info.heading} text={info.text} />
      ))}
    </S.CountryInfoListContainer>
  );
}

export default CountryInfoList;
