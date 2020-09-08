import React from 'react';
import {ScrollView, View, Image} from 'react-native';
// import external libraries
import {Divider, Text, Button} from 'react-native-elements';
import {SvgUri} from 'react-native-svg';
import PropTypes from 'prop-types';
// import custom component
import NavHeader from '../../components/NavHeader';
import Loader from '../../components/ThreeDotLoader';
// import config, constant and style
import I18n from '../../config/i18n';
import displayStyles from '../../theme/displayStyles';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';
import styles from './styles';

const country = {
  Name: 'Country Detail',
};

const CountryDetail = props => {
  const {countryDetail, weatherLoader, weatherDetail} = props;
  console.log('countryDetail', countryDetail);
  const handleWeatherSubmit = () => {
    const {
      actions: {getWeatherDetail},
    } = props;
    getWeatherDetail(countryDetail.capital || '');
  };
  return (
    <>
      <NavHeader withHeader />
      <ScrollView style={[displayStyles.container]}>
        <View>
          <Text h2>{country.Name}</Text>
          <View style={styles.fromDivider}>
            <Divider />
          </View>
          <View>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              {I18n.t('capital')} : {countryDetail.capital || ''}
            </Text>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              {I18n.t('population')} : {countryDetail.population || ''}
            </Text>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              {I18n.t('latlng')} : {countryDetail.latlng[0] || ''}
              {', '}
              {countryDetail.latlng[1] || ''}
            </Text>
            {countryDetail.flag && (
              <SvgUri width="100%" height="100%" uri={countryDetail.flag} />
            )}
            <View style={[spacing.mt2]}>
              <Button
                title={loader ? '' : 'Capital Weather'}
                icon={
                  weatherLoader && (
                    <View style={spacing.pv1}>
                      <Loader size={11} />
                    </View>
                  )
                }
                onPress={handleWeatherSubmit}
              />
            </View>
            {weatherDetail && (
              <>
                <Text style={[spacing.mt2, typography.bodyMedium]}>
                  {I18n.t('temp')} : {weatherDetail.temperature || ''}
                </Text>
                <Text style={[spacing.mt2, typography.bodyMedium]}>
                  {I18n.t('weather_icons')} :{' '}
                  {weatherDetail.weather_icons || ''}
                </Text>
                <Text style={[spacing.mt2, typography.bodyMedium]}>
                  {I18n.t('wind_speed')} : {weatherDetail.wind_speed || ''}
                  {', '}
                  {countryDetail.latlng[1] || ''}
                </Text>
                <Text style={[spacing.mt2, typography.bodyMedium]}>
                  {I18n.t('precip')} : {weatherDetail.precip || ''}
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

CountryDetail.propTypes = {
  countryDetail: PropTypes.object,
};

export default CountryDetail;
