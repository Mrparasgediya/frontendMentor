import Countries from "components/Countries/Countries";
import SearchAndDropDownPanel from "components/SearchAndDropDownPanel/SearchAndDropDownPanel";
import React, { useEffect, useState } from "react";
import * as S from "./Home.styles";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=region;population;capital;name;flag"
      );
      const data = await res.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);
  return (
    <S.Home>
      <SearchAndDropDownPanel countries={countries} />
      <Countries countries={countries} />
    </S.Home>
  );
}

export default Home;
