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

  const handleWeatherSubmit = capital => {
    const {
      actions: {getWeatherDetail},
    } = props;
    getWeatherDetail(capital);
  };

  return (
    <>
      <NavHeader withHeader />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        style={[displayStyles.flex1, displayStyles.container]}>
        <View>
          <Text h2>{country.Name}</Text>
          <View style={styles.fromDivider}>
            <Divider />
          </View>
          <View>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              {I18n.t('capital')} :{' '}
              {(countryDetail && countryDetail.capital) || ''}
            </Text>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              {I18n.t('population')} :{' '}
              {(countryDetail && countryDetail.population) || ''}
            </Text>
            {countryDetail &&
            countryDetail.latlng &&
            countryDetail.latlng.length > 0 ? (
              <Text style={[spacing.mt2, typography.bodyMedium]}>
                {I18n.t('latlng')} : {countryDetail.latlng[0] || ''}
                {', '}
                {(countryDetail &&
                  countryDetail.latlng &&
                  countryDetail.latlng.length > 1 &&
                  countryDetail.latlng[1]) ||
                  ''}
              </Text>
            ) : null}

            {countryDetail && countryDetail.flag ? (
              <SvgUri width={50} height={50} uri={countryDetail.flag} />
            ) : null}
          </View>
          <View style={[spacing.mt2]}>
            <Button
              title={weatherLoader ? '' : 'Capital Weather'}
              icon={
                weatherLoader && (
                  <View style={spacing.pv1}>
                    <Loader size={11} />
                  </View>
                )
              }
              onPress={() =>
                handleWeatherSubmit(
                  (countryDetail && countryDetail.capital) || '',
                )
              }
            />
          </View>
          {weatherDetail && (
            <>
              <Text style={[spacing.mt2, typography.bodyMedium]}>
                {I18n.t('temp')} : {weatherDetail.temperature || ''}
              </Text>
              <Text style={[spacing.mt2, typography.bodyMedium]}>
                {I18n.t('weather_icons')} : {weatherDetail.weather_icons || ''}
                {weatherDetail.weather_icons.length > 0 &&
                  weatherDetail.weather_icons.map(item => {
                    <View style={styles.flagImageContainer}>
                      <Image source={{uri: item}} style={styles.flagImage} />;
                    </View>;
                  })}
              </Text>
              <Text style={[spacing.mt2, typography.bodyMedium]}>
                {I18n.t('wind_speed')} : {weatherDetail.wind_speed || ''}
              </Text>
              <Text style={[spacing.mt2, typography.bodyMedium]}>
                {I18n.t('precip')} : {weatherDetail.precip || ''}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

CountryDetail.propTypes = {
  countryDetail: PropTypes.object,
  weatherDetail: PropTypes.object,
};

export default CountryDetail;
