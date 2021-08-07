import { useEffect, useState } from "react";

function useCountries() {
  const [countries, setCountries] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=region;population;capital;name;flag;alpha3Code"
      );
      const data = await res.json();
      const dataObj = data.reduce(
        (countries, { alpha3Code, ...countryData }) => ({
          ...countries,
          [alpha3Code]: countryData,
        }),
        {}
      );
      setCountries(dataObj);
    };
    fetchCountries();
  }, []);
  return countries;
}

export default useCountries;
