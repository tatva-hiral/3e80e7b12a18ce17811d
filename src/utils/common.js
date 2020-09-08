// import external libraries
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size) => Math.ceil(size * scale);

/* To handle if value is empty */
export function isEmpty(value) {
  return value === '' || value === undefined || value === null;
}

/**
 * CHECKS IF THE PASSED VALUE IS VALID EMAIL
 * RETURN `true` IF VALID ELSE RETURN `false`
 */
export function emailValidate(fieldName, val) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (isEmpty(val)) {
    return {status: false, message: `Please enter ${fieldName}`};
  } else if (!regex.test(val)) {
    return {status: false, message: `Please enter valid ${fieldName}`};
  }
  return {status: true, message: ''};
}

/* To handle required validation */
export function requireValidate(fieldName, value, isBool = false) {
  if (isBool) {
    if (value) {
      return {status: true, message: ''};
    }
    return {status: false, message: ''};
  }
  if (value === '' || value === undefined || value === null) {
    if (fieldName === 'lmsUrl') {
      return {status: false, message: `Please select ${fieldName}`};
    } else {
      return {status: false, message: `Please enter ${fieldName}`};
    }
  }
  return {status: true, message: ''};
}
