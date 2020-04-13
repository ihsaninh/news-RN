import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import { TabNavigation } from './TabNavigator';
import { Detail, Search } from '../screens';

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'ID News';

  switch (routeName) {
    case 'Beranda':
      return 'ID News';
    case 'Eksplore':
      return 'Topik';
    case 'Notifikasi':
      return 'Notifikasi';
    case 'Profil':
      return 'Profile Saya';
  }
};

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.FadeFromBottomAndroid,
        headerPressColorAndroid: 'rgba(0,0,0,0.2)',
        headerBackImage: () => <Icon name="chevron-left" size={26} />,
      }}>
      <Stack.Screen
        name="ID News"
        component={TabNavigation}
        options={({ route }) => ({
          ...options,
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ ...options, title: 'Detail News' }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ ...options, title: 'Search News' }}
      />
    </Stack.Navigator>
  );
};

const options = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Lato-Bold',
  },
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
};
