import {StyleSheet} from 'react-native';
import {defaultColors} from './color';

const commonStyles = StyleSheet.create({
  hidePasswordStyle: {
    fontFamily: 'Montserrat-Bold',
    color: defaultColors.blue,
  },
  showPasswordStyle: {
    fontFamily: 'Montserrat-Bold',
    color: defaultColors.grey2,
  },
});

export default commonStyles;
