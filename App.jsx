import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/TabNavigator';
import RootNavigator from './src/router/RootNavigator';
import Provider from './src/context/provider';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
