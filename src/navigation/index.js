import * as React from 'react';
import 'react-native-gesture-handler';
// import external libraries
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import _ from 'lodash';
// import custom components
import PrimaryNavigator from './PrimaryNavigator';
import SplashScreen from '../screens/SplashScreen';
// import custom utilities
import * as Storage from '../utils/storage';
import * as NavigationService from '../services/navigationService';
import useNavigationPersistence from './navigation-persistance';
import {STACKS} from '../constants';

const Stack = createStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

const RootNavigator = () => {
  const [isReady, setIsReady] = React.useState(false);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(Storage);
  //Set navigation service to use navigation in redux actions.
  let navigator;
  React.useEffect(() => {
    !_.isEmpty(navigator) && NavigationService.setNavigator(navigator);
  });

  React.useEffect(() => {
    const initializeApp = async () => {
      if (!isReady) {
        setTimeout(() => {
          setIsReady(true);
        }, 3000);
      }
    };
    initializeApp();
  }, [isReady]);

  // This step should be completely covered over by the splash screen though.
  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer
      ref={(nav) => {
        navigator = nav;
      }}
      theme={navigationTheme}
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}>
      <Stack.Navigator>
        <Stack.Screen
          name={STACKS.app.name}
          component={PrimaryNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
