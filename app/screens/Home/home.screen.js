import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { NewsList } from './components/newslist';
import { Searchbar } from './components/searchbar';
import { styles } from './home.style';
import { BaseUrl } from '../../utils/constants';
import { CategoryList } from './components/categorylist';
import { LoadingIndicator } from '../../components/LoadingIndicator/loading';

class Home extends Component {
  state = {
    news: [],
    error: '',
    loading: false,
    page: 1,
    totalResult: 0,
  };

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData = async () => {
    const { page, news } = this.state;
    try {
      this.setState({ loading: true });
      const response = await fetch(BaseUrl(page));
      const result = await response.json();
      this.setState({
        news: [...news, ...result.articles],
        loading: false,
        totalResult: result.totalResults,
      });
    } catch (error) {
      error;
    }
  };

  renderLoadMore = async () => {
    const { page } = this.state;
    this.setState(
      {
        page: page + 1,
      },
      () => this.getNewsData(),
    );
  };

  toDetailNews = (item) => () => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { news: item });
  };

  renderCategoryList = () => {
    return <CategoryList {...this.props} />;
  };

  renderHeader = () => {
    return (
      <View>
        {this.renderSearchBar()}
        {this.renderCategoryList()}
      </View>
    );
  };

  renderListFooter = () => {
    const { news, totalResult } = this.state;
    return news.length < totalResult && <LoadingIndicator size={24} />;
  };

  renderSearchBar = () => {
    return (
      <Searchbar
        title="Apa yang ingin kamu baca?"
        onPress={this.toDetailNews}
        {...this.props}
      />
    );
  };

  renderItem = ({ item }) => {
    return (
      <NewsList
        source={item.source.name}
        title={item.title}
        image={item.urlToImage}
        onPress={this.toDetailNews(item)}
        publishDate={item.publishedAt}
        {...this.props}
      />
    );
  };

  render() {
    const { news } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={this.renderItem}
          keyExtractor={(_, i) => i.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderListFooter}
          onEndReached={this.renderLoadMore}
          onEndReachedThreshold={0.7}
        />
      </View>
    );
  }
}

export default Home;
