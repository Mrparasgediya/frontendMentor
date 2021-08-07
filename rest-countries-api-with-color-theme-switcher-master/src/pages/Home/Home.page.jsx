import Countries from "components/Countries/Countries";
import SearchAndDropDownPanel from "components/SearchAndDropDownPanel/SearchAndDropDownPanel";
import React from "react";
import * as S from "./Home.styles";

function Home() {
  return (
    <S.Home>
      <SearchAndDropDownPanel />
      <Countries />
    </S.Home>
  );
}

export default Home;
