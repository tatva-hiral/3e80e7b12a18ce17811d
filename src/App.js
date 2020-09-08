/**
 * React Native Engineer AI Test App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {LogBox} from 'react-native';
// import external libraries
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import {PersistGate} from 'redux-persist/es/integration/react';
import {enableScreens} from 'react-native-screens';

import {store, persistor} from './redux/store/store';
// import custom components
import theme from './components/Theme';
import RootNavigator from './navigation';
import './config/i18n';

LogBox.ignoreAllLogs();

enableScreens();

/**
 * This is the root component of our app.
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <ThemeProvider theme={theme}>
            <RootNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
