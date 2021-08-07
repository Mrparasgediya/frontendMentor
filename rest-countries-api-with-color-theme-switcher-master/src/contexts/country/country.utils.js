export const getRegionsFromCountries = (countriesArr, countries) => {
  const regions = countriesArr.reduce((regions, countryCode) => {
    const countryRegion = countries[countryCode].region.toLowerCase();
    if (!regions.includes(countryRegion) && countryRegion.length > 0) {
      regions.push(countryRegion);
    }
    return regions;
  }, []);

  regions.unshift("all");
  return regions;
};

export const getCountriesFromRegion = (region, countries, countriesKeys) => {
  return region === "all"
    ? countriesKeys
    : countriesKeys.filter(
        (countryKey) => countries[countryKey].region.toLowerCase() === region
      );
};
