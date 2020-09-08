import {api} from './apiService';

export async function getCountry(urlParam, params) {
  const headers = {
    'Content-Type': 'application/json',
  };
  return api(urlParam, params, 'GET', headers);
}

export async function getWeather(urlParam, params = '') {
  return api(urlParam, params, 'GET');
}
