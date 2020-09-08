import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import PropTypes from 'prop-types';
import {defaultColors} from '../../theme/color';
import spacing from '../../theme/spacing';
import {BACK} from '../../assets/images';
import styles from './styles';

const NavHeader = (props) => {
  const navigation = useNavigation();
  const {onPress, hasPressEvent, withHeader} = props;
  const handlePress = () => {
    if (hasPressEvent) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  if (withHeader) {
    return (
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={handlePress}
            style={[spacing.pr2, spacing.pt2, spacing.pb2]}>
            <Image source={BACK} color={defaultColors.textPrimary} />
          </TouchableOpacity>
        }
      />
    );
  }

  return (
    <View style={[styles.headerIconContainer, spacing.mb1]}>
      <SafeAreaView />
      <TouchableOpacity
        onPress={handlePress}
        style={[spacing.pr2, spacing.pt2, spacing.pb2]}>
        <Image source={BACK} color={defaultColors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
};

NavHeader.propTypes = {
  onPress: PropTypes.func,
  hasPressEvent: PropTypes.bool,
  withHeader: PropTypes.bool,
};

NavHeader.defaultProps = {
  onPress: () => {},
  hasPressEvent: false,
  withHeader: false,
};

export default NavHeader;
