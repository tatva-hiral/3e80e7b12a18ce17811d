/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Platform, Text, View} from 'react-native';

import {Input} from 'react-native-elements';
import PropTypes from 'prop-types';

import theme from '../Theme';
import {defaultColors} from '../../theme/color';
import typography from '../../theme/typography';
import spacing from '../../theme/spacing';

const InputGroup = (props) => {
  const {
    placeholder,
    label,
    value,
    errorMessage,
    rightIcon,
    keyboardType,
    onChangeText,
    autoCapitalize,
    autoCorrect,
    autoCompleteType,
    textContentType,
    secureTextEntry,
    returnKeyType,
    returnKeyLabel,
    onSubmitEditing,
    onKeyPress,
    inputRef,
    multiline,
    numberOfLines,
    leftIcon,
    inputStyle,
    alternateInput,
  } = props;
  const [borderColor, setBorderColor] = useState(defaultColors.border);
  const [color, setColor] = useState(defaultColors.textPrimary);

  const onFocus = () => {
    setColor(defaultColors.primary);
  };

  const onBlur = () => {
    setBorderColor(defaultColors.border);
    setColor(defaultColors.textPrimary);
  };

  return (
    <>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        label={label}
        labelStyle={{
          color:
            errorMessage && errorMessage.length > 0
              ? defaultColors.error
              : color,
        }}
        inputContainerStyle={{
          ...(multiline
            ? theme.Input.textAreaContainerStyle
            : alternateInput
            ? theme.Input.alternateContainerStyle
            : !rightIcon
            ? theme.Input.inputContainerStyle
            : theme.Input.iconInputContainerStyle),
          borderColor: errorMessage ? defaultColors.error : borderColor,
        }}
        containerStyle={{
          margin: 0,
          padding: 0,
          height: !multiline ? (Platform.OS === 'ios' ? 66 : 78) : null,
        }}
        inputStyle={inputStyle ? inputStyle : {...theme.Input.inputStyle}}
        rightIcon={rightIcon ? rightIcon : null}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoCompleteType={autoCompleteType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onSubmitEditing={onSubmitEditing}
        onKeyPress={onKeyPress}
        multiline={multiline}
        numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
        minHeight={
          Platform.OS === 'ios' && numberOfLines ? 20 * numberOfLines : null
        }
        leftIcon={leftIcon}
        placeholderTextColor={defaultColors.grey1}
      />
      {errorMessage && errorMessage.length > 0 ? (
        <View style={spacing.mt2}>
          <Text style={[typography.errorMessage, typography.textCentered]}>
            Error Message
          </Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

InputGroup.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  rightIcon: PropTypes.any,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoCompleteType: PropTypes.string,
  textContentType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  returnKeyLabel: PropTypes.string,
  onKeyPress: PropTypes.func,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
  leftIcon: PropTypes.any,
  inputStyle: PropTypes.object,
  alternateInput: PropTypes.bool,
};

InputGroup.defaultProps = {
  placeholder: null,
  value: null,
  label: null,
  errorMessage: null,
  rightIcon: null,
  keyboardType: 'default',
  autoCapitalize: 'sentences',
  autoCorrect: true,
  textContentType: null,
  secureTextEntry: false,
  returnKeyType: 'next',
  returnKeyLabel: 'Next',
  onKeyPress: () => {},
  multiline: false,
  numberOfLines: null,
  leftIcon: null,
  alternateInput: false,
};

export default InputGroup;
