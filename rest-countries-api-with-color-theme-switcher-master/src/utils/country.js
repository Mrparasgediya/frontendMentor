export function getConvertedPopulation(population) {
  let str = population.toString();
  const strArr = [];
  // slice first last three chars
  strArr.push(str.slice(-3));
  str = str.substring(0, str.length - 3);
  return splitStrToArr(str, strArr).join(",");
}

function splitStrToArr(name, arr, charLength) {
  if (name.length === 0) {
    return arr;
  }

  arr.unshift(name.slice(-2));

  if (name.length <= charLength) {
    return arr;
  }

  return splitStrToArr(name.substring(0, name.length - 2), arr, charLength);
}

export const getBorderCountryFromCountries = async (borders, countries) => {
  const borderCountries = [];
  for (let countryCode of borders) {
    const foundCountry = countries[countryCode];
    if (foundCountry && "name" in foundCountry) {
      borderCountries.push(foundCountry.name);
    } else {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=name`
      );
      const borderCountryData = await res.json();
      if ("name" in borderCountryData) {
        borderCountries.push(borderCountryData.name);
      }
    }
  }
  return borderCountries;
};

export const searchCountryByName = (name, countries, countriesKeys) => {
  const foundCountriesKeys = countriesKeys.filter((countryKey) =>
    countries[countryKey].name.toLowerCase().includes(name)
  );
  return foundCountriesKeys;
};
