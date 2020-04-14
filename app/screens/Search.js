import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

import { SearchNews } from '../utils/constants';
import { NewsList } from '../screens/Home/components/newslist';
import { HeaderSearch } from '../components/HeaderSearch/Header';

function Search({ navigation }) {
  const [value, onChangeText] = useState('');
  const [data, setData] = useState({
    news: [],
    loading: false,
  });

  navigation.setOptions({
    header: () => (
      <HeaderSearch
        onChangeText={(text) => onChangeText(text)}
        value={value}
        onEndEditing={getSearchNews}
      />
    ),
  });

  const getSearchNews = async () => {
    try {
      setData({
        ...data,
        loading: true,
      });
      const response = await fetch(SearchNews(value));
      const { articles } = await response.json();
      setData({
        ...data,
        loading: false,
        news: articles,
      });
    } catch (err) {
      throw err;
    }
  };

  const toDetailNews = (item) => () => {
    navigation.navigate('Detail', {
      news: item,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <NewsList
        source={item.source.name}
        title={item.title}
        image={item.urlToImage}
        onPress={toDetailNews(item)}
        publishDate={item.publishedAt}
      />
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.emptySearch}
        />
        <Text style={styles.emptyTextTitle}>Pencarian Tidak Ada</Text>
        <Text style={styles.emptyTextDesc}>
          Hasil pencarian tidak tersedia. Silahkan cari topik dengan menggunakan
          kolom search diatas.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.news}
        renderItem={renderItem}
        onRefresh={getSearchNews}
        refreshing={data.loading}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: '50%',
  },
  emptySearch: {
    width: 200,
    height: 150,
  },
  emptyTextTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    paddingVertical: 10,
  },
  emptyTextDesc: {
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: 'Lato-Regular',
    lineHeight: 25,
  },
});

export default Search;
