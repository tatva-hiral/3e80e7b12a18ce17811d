import {StyleSheet} from 'react-native';
import {defaultColors} from '../../theme/color';
import {scaledSize} from '../../utils/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: defaultColors.textPrimary,
  },
  welcomeTitle: {
    fontSize: scaledSize(20),
    fontWeight: 'normal',
    textAlign: 'center',
    color: defaultColors.grey1,
  },
});
export default styles;
