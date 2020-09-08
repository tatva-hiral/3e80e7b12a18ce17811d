import React from 'react';
import {View, Text} from 'react-native';
// import custom utilities
import typography from '../../theme/typography';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={[styles.wrapper]}>
      <Text style={[styles.welcomeTitle, typography.bodyLargeSecondary]}>
        Welcome to engineer.ai
      </Text>
    </View>
  );
};
export default SplashScreen;
