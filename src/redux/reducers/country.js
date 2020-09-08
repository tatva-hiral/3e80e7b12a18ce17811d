import {countryActionsType} from '../actionTypes';

// initial State
const initialState = {
  loader: false,
  countryDetail: null,
  weatherLoader: false,
  weatherDetail: null,
};

/**
 * country reducer
 * @param {*} state
 * @param {*} action
 */
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case countryActionsType.GET_COUNTRY_REQUEST: {
      return {
        ...state,
        loader: true,
      };
    }
    case countryActionsType.SET_COUNTRY_REQUEST: {
      return {
        ...state,
        countryDetail: action.payload,
        loader: false,
      };
    }
    case countryActionsType.GET_WEATHER_DETAIL: {
      return {
        ...state,
        weatherLoader: true,
      };
    }
    case countryActionsType.SET_WEATHER_DETAIL: {
      return {
        ...state,
        weatherDetail: action.payload,
        weatherLoader: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default countryReducer;
