// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import {CART, TAB} from '../utils/routes';
import TabNavigator from './TabNavigator';
import {AppColors} from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
}

export default RootNavigator;