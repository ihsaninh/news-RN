import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1,
  },
  tabBarContent: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelFocused: {
    paddingTop: 8,
    color: 'red',
    fontSize: 11,
  },
  labelUnFocused: {
    paddingTop: 8,
    color: 'grey',
    fontSize: 11,
  },
});

export { styles };
