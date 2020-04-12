import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { categoryList } from '../../../utils/constants';

import { styles } from '../home.style';

const CategoryList = ({ categoryName }) => {
  return (
    <View style={styles.categoryListWrap}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, i) => (
          <View
            key={i}
            style={[
              styles.categoryList,
              category.isActive ? styles.bgActive : styles.bgInactive,
            ]}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export { CategoryList };
