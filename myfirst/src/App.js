import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import NewsCard from './components/NewsCard/index';
import news_data from './news_data.json';
import Banner from './components/Banner/index';

const App = () => {
  const renderNews = ({item}) => {
    return <NewsCard news={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_text}>News</Text>
        <FlatList
          ListHeaderComponent={<Banner />}
          //KeyExtractor önemli: çok fazla veri listelenirken performans için lazım
          keyExtractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    margin: 5,
  },
});

export default App;
