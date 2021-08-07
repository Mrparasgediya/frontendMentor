import countryActionsTypes from "./country.types";

const getCountryActions = (dispatch) => ({
  setCountries: (countries) =>
    dispatch({
      type: countryActionsTypes.SET_COUNTRIES,
      payload: countries,
    }),

  setCurrentCountries: (countriesIds) =>
    dispatch({
      type: countryActionsTypes.SET_CURRENT_COUNTRIES,
      payload: countriesIds,
    }),

  setCurrentRegion: (region) =>
    dispatch({
      type: countryActionsTypes.SET_CURRENT_REGION,
      payload: region,
    }),

  toggleShowDropDown: () =>
    dispatch({
      type: countryActionsTypes.TOGGLE_SHOW_DROP_DOWN,
    }),

  resetRegionCountries: () =>
    dispatch({
      type: countryActionsTypes.RESET_REGION_COUNTRIES,
    }),
});

export default getCountryActions;
