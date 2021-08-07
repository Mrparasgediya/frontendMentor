import countryActionsTypes from "./country.types";
import {
  getCountriesFromRegion,
  getRegionsFromCountries,
} from "./country.utils";

const countryReducer = (state, action) => {
  switch (action.type) {
    case countryActionsTypes.SET_COUNTRIES:
      const keys = Object.keys(action.payload);
      return {
        ...state,
        countries: action.payload,
        currentCountries: keys,
        countriesKeys: keys,
        regions: getRegionsFromCountries(keys, action.payload),
        regionCountries: keys,
      };
    case countryActionsTypes.SET_CURRENT_COUNTRIES:
      return {
        ...state,
        currentCountries: action.payload,
      };

    case countryActionsTypes.SET_CURRENT_REGION:
      const validRegion = state.regions.includes(action.payload)
        ? action.payload
        : "all";
      const regionCountries = getCountriesFromRegion(
        validRegion,
        state.countries,
        state.countriesKeys
      );
      return {
        ...state,
        currentRegion: validRegion,
        currentCountries: regionCountries,
        regionCountries: regionCountries,
      };

    case countryActionsTypes.TOGGLE_SHOW_DROP_DOWN:
      return {
        ...state,
        showDropDown: !state.showDropDown,
      };

    case countryActionsTypes.RESET_REGION_COUNTRIES:
      return {
        ...state,
        currentCountries: state.regionCountries,
      };
    default:
      return state;
  }
};

export default countryReducer;
