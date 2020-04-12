import React from 'react';
import { View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

import { styles } from './loading.style';

const LoadingIndicator = ({ size }) => {
  return (
    <View style={styles.indicator}>
      <UIActivityIndicator color="#666" size={size} />
    </View>
  );
};

export { LoadingIndicator };
