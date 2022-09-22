import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  inner_container: {
    padding: 10,
    flex: 1,
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  content_container: {
    flexDirection: 'row',
  },
  artist: {},
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    height: 27,
    alignItems: 'center',
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
});
