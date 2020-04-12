import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/empty.png')}
          style={styles.emptyImage}
        />
        <Text style={styles.textTitleEmpty}>Belum ada notifikasi</Text>
        <Text style={styles.textInfoEmpty}>
          Masih belum ada notifikasi untukmu, nih! Coba mulai menulis dan
          berkomentar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  emptyImage: {
    height: 200,
    width: 200,
  },
  textTitleEmpty: {
    fontFamily: 'Lato-Bold',
    paddingTop: 10,
    fontSize: 20,
  },
  textInfoEmpty: {
    fontFamily: 'Lato-Regular',
    paddingTop: 10,
    textAlign: 'center',
    maxWidth: '80%',
    lineHeight: 26,
    color: 'grey',
  },
});

export default Notification;
