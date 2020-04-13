import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './TabBar.style';

export const CustomTabTar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let icon = '';
        switch (label) {
          case 'Beranda':
            icon = 'home';
            break;
          case 'Profil':
            icon = 'user';
            break;
          case 'Notifikasi':
            icon = 'bell';
            break;
          case 'Eksplore':
            icon = 'grid';
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.1)', true)}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}>
            <View style={styles.tabBarContent}>
              <Icon name={icon} size={18} color={isFocused ? 'red' : 'grey'} />
              <Text
                style={isFocused ? styles.labelFocused : styles.labelUnFocused}>
                {label}
              </Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};
