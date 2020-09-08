import {countryActionsType} from '../actionTypes';

// get country
export const getCountryRequest = postData => ({
  type: countryActionsType.GET_COUNTRY_REQUEST,
  payload: postData,
});

// coutnry response
export const setCountryData = data => ({
  type: countryActionsType.SET_COUNTRY_REQUEST,
  payload: data,
});

// weather details
export const getWeatherDetail = detail => ({
  type: countryActionsType.GET_WEATHER_DETAIL,
  payload: detail,
});

export const setWeatherDetail = detail => ({
  type: countryActionsType.SET_WEATHER_DETAIL,
  payload: detail,
});
