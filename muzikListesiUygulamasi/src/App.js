import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, FlatList} from 'react-native';
import music_data from './songCards_data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  //Ekranda dinamik bir değişiklik olacağı için (Arama işlemi) useState kullanmak durumundayız
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;

  //prop geçirme yönetemi ile SearchBar.js deki TextInput'un onChangeText metodunun return eden değerini bu sayfada yakalayabiliyoruz.
  const handleSearch = text => {
    // Filtreleme işleminde return true dönenleri değişkene atıyor false olanları atmıyor
    const filterList = music_data.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.title.toLowerCase();
      // Şart sağlanıyorsa return true olarak dönüyor
      // indexOf fonskiyonunda eğer verilen harf mevcutsa sırasını yoksa -1 olarak döner
      // bizde burda -1'den büyükse diyerek true yada false dönmesini sağlıyoruz
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filterList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
