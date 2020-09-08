const apiUrl = 'https://restcountries.eu/rest/v2/name/';

export const endpoint = {
  API_URL: apiUrl,
  WEATHER_URL:
    'http://api.weatherstack.com/current?access_key=55a419f25f88e02cbad590401b6aea26&query=',
};

export const MODULES = {
  country: {
    name: 'Country',
  },
  countryDetail: {
    name: 'CountryDetail',
  },
};

export const STACKS = {
  app: {
    name: 'app',
  },
  auth: {
    name: 'auth',
  },
};

export const MAX_LIMIT = 20;
