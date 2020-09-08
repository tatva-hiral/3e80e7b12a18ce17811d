import {StyleSheet} from 'react-native';
import {defaultColors} from '../../theme/color';

const styles = StyleSheet.create({
  listContentContainer: {paddingBottom: 30},
  textlabel: {
    fontSize: 16,
    marginEnd: 8,
  },
  textValue: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  itemContainer: {
    borderBottomColor: defaultColors.primary,
    borderBottomWidth: 1,
    padding: 20,
    borderRadius: 4,
  },
});

export default styles;
