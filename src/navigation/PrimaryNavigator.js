import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CountryScreen from '../screens/Country';
import CountryDetail from '../screens/CountryDetail';
import {MODULES} from '../constants';

const Stack = createStackNavigator();

export default function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen name={MODULES.country.name} component={CountryScreen} />
      <Stack.Screen
        name={MODULES.countryDetail.name}
        component={CountryDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
