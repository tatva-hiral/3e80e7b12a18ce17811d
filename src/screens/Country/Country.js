import React, {useState} from 'react';
import {View, Platform, KeyboardAvoidingView} from 'react-native';
// import external libraries
import {Button} from 'react-native-elements';
import _ from 'lodash';
// import custom components
import InputGroup from '../../components/InputGroup';
import Loader from '../../components/ThreeDotLoader';
// import custom utilities
import displayStyles from '../../theme/displayStyles';
import spacing from '../../theme/spacing';

const inputs = {
  country: {
    label: null,
    value: null,
    name: 'country',
    placeholder: 'Enter country',
  },
};

const CountryScreen = props => {
  const [country, setCountry] = useState('');
  const {loader} = props;
  const changeText = (key, text) => {
    setCountry(text);
  };

  const handleCountrySubmit = () => {
    const {
      actions: {getCountryRequest},
    } = props;
    getCountryRequest(country);
  };

  return (
    <KeyboardAvoidingView
      style={[displayStyles.flex1, displayStyles.container]}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={100}>
      <View style={[spacing.mt4]}>
        <InputGroup
          value={inputs.country.value}
          placeholder={inputs.country.placeholder}
          errorMessage={''}
          onChangeText={text => changeText('country', text)}
          autoCapitalize="none"
          returnKeyType="done"
          onSubmitEditing={handleCountrySubmit}
        />
      </View>
      <View style={[spacing.mt2]}>
        <Button
          title={loader ? '' : 'Submit'}
          icon={
            loader && (
              <View style={spacing.pv1}>
                <Loader size={11} />
              </View>
            )
          }
          onPress={handleCountrySubmit}
          disabled={_.isEmpty(country)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CountryScreen;
