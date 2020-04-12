import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

import { styles } from '../home.style';
import { formatDate, removeSource } from '../../../utils/helpers';

const NewsList = ({ title, publishDate, source, image, onPress }) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.newsContainer}>
        <View style={styles.newsInfoWrap}>
          <View style={styles.newsInfo}>
            <Text style={styles.newsCategory}>{source}</Text>
            <Text style={styles.newsDate}>{formatDate(publishDate)}</Text>
          </View>
          <Text style={styles.newsTitle}>{removeSource(title)}</Text>
        </View>
        <Image style={styles.newsImage} source={{ uri: image }} />
      </View>
    </TouchableNativeFeedback>
  );
};

export { NewsList };
