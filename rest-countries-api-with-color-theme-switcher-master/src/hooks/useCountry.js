import { CountryContext } from "contexts/country/country.context";
import { useContext, useEffect, useState } from "react";
import { getBorderCountryFromCountries } from "utils/country";

function useCountry(countryName) {
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { countryState } = useContext(CountryContext);

  useEffect(() => {
    const fetchCountry = async () => {
      const fieldsToFetch = [
        "alpha3Code",
        "nativeName",
        "subregion",
        "topLevelDomain",
        "currencies",
        "languages",
        "borders",
        "region",
        "population",
        "capital",
        "name",
        "flag",
        "alpha3Code",
      ];
      const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
      setIsLoading(true);
      const res = await fetch(`${url}&fields=${fieldsToFetch.join(";")}`);
      const data = await res.json();

      if (data.status !== 404) {
        const country = data[0];
        country.borders = await getBorderCountryFromCountries(
          country.borders,
          countryState.countries
        );
        setCountry(country);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, [countryName, countryState.countries]);

  return [country, isLoading];
}

export default useCountry;
