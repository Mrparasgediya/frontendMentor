import { createContext, useReducer } from "react";
import getCountryActions from "./country.actions";
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

  const countryActions = getCountryActions(dispatch);

  return (
    <CountryContext.Provider value={{ countryState, countryActions }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
