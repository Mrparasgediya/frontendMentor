import { createContext, useReducer, useEffect } from "react";
import {
  resetRegionCountries,
  setCountries,
  setCurrentCountries,
  setCurrentRegion,
  toggleShowDropDown,
} from "./country.actions";
import countryReducer from "./country.reducer";

export const CountryContext = createContext();

const INITIAL_STATE = {
  countries: {},
  regions: [],
  countriesKeys: [],
  currentCountries: [],
  currentRegion: "all",
  regionCountries: [],
  showDropDown: false,
};

const CountryProvider = ({ children }) => {
  const [countryState, dispatch] = useReducer(countryReducer, INITIAL_STATE);

  useEffect(() => {
    console.log(countryState);
  }, [countryState]);

  const countryActions = {
    setCountries: (countries) => dispatch(setCountries(countries)),
    setCurrentCountries: (countriesKeysMap) =>
      dispatch(setCurrentCountries(countriesKeysMap)),
    setCurrentRegion: (region) => dispatch(setCurrentRegion(region)),
    toggleShowDropDown: () => dispatch(toggleShowDropDown()),
    resetRegionCountries: () => dispatch(resetRegionCountries()),
  };

  return (
    <CountryContext.Provider value={{ countryState, countryActions }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
