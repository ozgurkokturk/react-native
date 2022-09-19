import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'stretch',
  },
  inner_container: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  author: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: 5,
  },
});
