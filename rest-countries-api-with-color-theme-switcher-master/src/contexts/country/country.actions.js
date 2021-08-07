const { default: countryActionsTypes } = require("./country.types");

export const setCountries = (countries) => ({
  type: countryActionsTypes.SET_COUNTRIES,
  payload: countries,
});

export const setCurrentCountries = (countriesIds) => ({
  type: countryActionsTypes.SET_CURRENT_COUNTRIES,
  payload: countriesIds,
});

export const setCurrentRegion = (region) => ({
  type: countryActionsTypes.SET_CURRENT_REGION,
  payload: region,
});

export const toggleShowDropDown = () => ({
  type: countryActionsTypes.TOGGLE_SHOW_DROP_DOWN,
});

export const resetRegionCountries = () => ({
  type: countryActionsTypes.RESET_REGION_COUNTRIES,
});
