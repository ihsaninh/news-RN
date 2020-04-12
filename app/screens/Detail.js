import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { removeSource, formatDate } from '../utils/helpers';

class Detail extends Component {
  render() {
    const { route } = this.props;
    const {
      news: {
        author,
        title,
        description,
        urlToImage,
        publishedAt,
        content,
        source,
      },
    } = route.params;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.newsInfoContainer}>
            <Text style={styles.newsInfoSource}>{source.name}</Text>
            <Text style={styles.newsInfoDate}>{formatDate(publishedAt)}</Text>
          </View>
          <Text style={styles.newsTitle}>{removeSource(title)}</Text>
          <Text style={styles.newsAuthor}>Author: {author || '-'}</Text>
          <Image
            style={styles.newsImage}
            source={{
              uri: urlToImage,
            }}
            resizeMode="stretch"
          />
          <Text style={styles.newsDesc}>{description}</Text>
          <Text style={styles.newsDesc}>{content}</Text>
          <Text style={styles.newsDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            iaculis quis magna commodo viverra. In sed turpis nisi. Fusce non
            luctus ipsum, quis tempor nisi. Praesent consectetur elit vitae
            augue sagittis, hendrerit sollicitudin ipsum pellentesque. Etiam
            suscipit turpis vitae egestas feugiat. Donec quam erat, semper sed
            aliquam non, consectetur vel orci. Mauris porta lacinia risus, id
            accumsan libero pulvinar at. Vestibulum lacinia massa id massa
            lobortis consequat quis vel ligula. Suspendisse ipsum dui, egestas
            sed condimentum id, congue vel lectus.
          </Text>
          <Text style={styles.newsDesc}>
            Integer egestas rutrum nulla id ultricies. Proin consectetur congue
            dictum. Curabitur a ante eu massa sodales varius in sed urna.
            Praesent sed ante ac nisl luctus congue. Vivamus libero dui,
            dignissim et gravida at, pretium eget magna. Proin interdum metus
            sed elementum maximus. Morbi tincidunt ligula id ex bibendum
            vulputate. Etiam mattis lacus lacus, nec pharetra est egestas in.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  newsInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  newsInfoSource: {
    color: '#ED4C67',
    fontFamily: 'Lato-Regular',
  },
  newsInfoDate: {
    fontFamily: 'Lato-Regular',
    paddingLeft: 10,
  },
  newsTitle: {
    paddingTop: 20,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Lato-Bold',
    paddingHorizontal: 20,
  },
  newsAuthor: {
    paddingHorizontal: 20,
    paddingTop: 20,
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  newsImage: {
    width: '100%',
    height: 250,
    marginVertical: 20,
  },
  newsDesc: {
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 20,
    lineHeight: 35,
    paddingBottom: 10,
    fontSize: 15,
  },
});

Detail.options = {
  topBar: {
    title: {
      text: 'Detail News',
      color: 'black',
      fontFamily: 'Lato-Bold',
      fontSize: 19,
      alignment: 'center',
    },
    elevation: 2,
  },
  statusBar: {
    backgroundColor: 'white',
    style: 'dark',
  },
};

export default Detail;
