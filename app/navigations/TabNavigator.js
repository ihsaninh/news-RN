import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabTar } from '../components/CustomTabBar/TabBar';
import { Home, Notification, Profile } from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBar={(props) => <CustomTabTar {...props} />}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Eksplore" component={Profile} />
      <Tab.Screen name="Notifikasi" component={Notification} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator>
  );
};
