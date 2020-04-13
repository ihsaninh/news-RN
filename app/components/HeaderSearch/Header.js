import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const HeaderSearch = ({ onChangeText, onEndEditing, value }) => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={26}
        style={styles.backIcon}
        onPress={onPressBack}
      />
      <TextInput
        autoFocus
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder="Apa yang ingin kamu baca hari ini?"
        placeholderTextColor="grey"
        style={styles.input}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },
  backIcon: {
    flex: 1,
  },
  input: {
    flex: 9,
    height: 45,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Lato-Regular',
    paddingLeft: 10,
    fontSize: 16,
    marginRight: 10,
    color: 'grey',
  },
});

export { HeaderSearch };
