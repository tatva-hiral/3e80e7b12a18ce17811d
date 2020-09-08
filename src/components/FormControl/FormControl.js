import React from 'react';
import {View, Platform, KeyboardAvoidingView} from 'react-native';
// import external libraries
import {Button} from 'react-native-elements';
// import custom utilities
import Loader from '../ThreeDotLoader';
import InputGroup from '../InputGroup';
import displayStyles from '../../theme/displayStyles';
import spacing from '../../theme/spacing';

const inputs = {
  email: {
    label: null,
    value: null,
    name: 'email',
    placeholder: 'Enter your email',
  },
  password: {
    label: null,
    value: null,
    name: 'password',
    placeholder: 'Enter your password',
  },
};

const FormControl = (props) => {
  // const onSubmit = (data) => {};

  const changeText = (key, text) => {};

  return (
    <KeyboardAvoidingView
      style={displayStyles.flex1}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={100}>
      <View style={[spacing.mt4]}>
        <InputGroup
          label={inputs.email.label}
          value={inputs.email.value}
          placeholder={inputs.email.placeholder}
          errorMessage={''}
          keyboardType="email-address"
          onChangeText={(text) => changeText('email', text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          returnKeyType="next"
          returnKeyLabel="Next"
          onSubmitEditing={() => {}}
        />
      </View>
      <View style={[spacing.mt2]}>
        <Button
          title={'Submit'}
          icon={
            false && (
              <View style={spacing.pv1}>
                <Loader size={11} />
              </View>
            )
          }
          onPress={() => {}}
          disabled={true}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormControl;
