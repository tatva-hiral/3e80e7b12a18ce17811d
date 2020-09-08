import {put, takeLatest} from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';
import {countryActionsType} from '../actionTypes';
import * as CountryAction from '../actions/country';
import {getCountry, getWeather} from '../../services/countryService';
import {endpoint, MODULES} from '../../constants';
import * as NavigationService from '../../services/navigationService';
import I18n from '../../config/i18n';

/**
 * watcher
 */
function* getCountryRequestWatcher() {
  yield takeLatest(
    countryActionsType.GET_COUNTRY_REQUEST,
    getCountryRequestHandler,
  );
}

function* getWeatherDetailWatcher() {
  yield takeLatest(
    countryActionsType.GET_WEATHER_DETAIL,
    getWeatherDetailHandler,
  );
}

/**
 * handler
 * @param value
 */
function* getCountryRequestHandler(value) {
  try {
    const countryName = value.payload || '';
    const url = endpoint.API_URL + countryName;
    const response = yield getCountry(url, '');
    if (response.success && response.data.length > 0) {
      const countryDetail =
        response.data.length == 1
          ? response.data[0]
          : response.data.filter(
              item => item.name.toLowerCase() == countryName.toLowerCase(),
            )[0];
      yield put(CountryAction.setCountryData(countryDetail));
      NavigationService.navigate(MODULES.countryDetail.name);
    } else {
      Toast.show(I18n.t('errorMessage'));
      yield put(CountryAction.setCountryData(null));
    }
  } catch (error) {
    console.log('getCountryRequestHandler error', error);
    Toast.show(I18n.t('errorMessage'));
    yield put(CountryAction.setCountryData(null));
  }
}

function* getWeatherDetailHandler(value) {
  try {
    const capitalName = value.payload || '';
    const url = endpoint.WEATHER_URL + capitalName;
    const weatherResponse = yield getWeather(url, '');
    console.log('weather respnose', weatherResponse);
    if (weatherResponse.success) {
      // const countryDetail =
      //   response.data.length == 1
      //     ? response.data[0]
      //     : response.data.filter(
      //         item => item.name.toLowerCase() == countryName.toLowerCase(),
      //       )[0];
      // yield put(CountryAction.setCountryData(countryDetail));
      // NavigationService.navigate(MODULES.countryDetail.name);
    } else {
      Toast.show(I18n.t('errorMessage'));
      yield put(CountryAction.setWeatherDetail(null));
    }
  } catch (error) {
    console.log('getWeatherDetailHandler error', error);
    Toast.show(I18n.t('errorMessage'));
    yield put(CountryAction.setWeatherDetail(null));
  }
}

export default [getCountryRequestWatcher, getWeatherDetailWatcher];
