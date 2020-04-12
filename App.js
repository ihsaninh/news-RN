import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { RootNavigation } from './app/navigations/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
