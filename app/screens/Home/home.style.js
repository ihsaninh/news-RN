import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchWrap: {
    marginTop: 20,
    height: 55,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  searchText: {
    color: '#aaa',
    fontFamily: 'Lato-Regular',
  },
  categoryListWrap: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryList: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 50,
    marginRight: 8,
    flexDirection: 'row',
  },
  categoryTitle: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    fontFamily: 'Lato-Bold',
    color: 'white',
  },
  bgActive: {
    backgroundColor: '#ED4C67',
  },
  bgInactive: {
    backgroundColor: 'grey',
  },
  newsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  newsInfoWrap: {
    flexDirection: 'column',
    flex: 4,
  },
  newsInfo: {
    flexDirection: 'row',
  },
  newsCategory: {
    color: '#ED4C67',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  newsDate: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    paddingLeft: 10,
    color: '#ED4C67',
  },
  newsTitle: {
    fontFamily: 'Lato-Bold',
    paddingTop: 8,
    fontSize: 14,
    lineHeight: 23,
    maxWidth: '90%',
  },
  newsImage: {
    height: 75,
    width: 60,
    borderRadius: 10,
    flex: 1,
  },
});

export { styles };
