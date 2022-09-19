import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, Switch, View} from 'react-native';

const cafeler = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'esc', isFavorite: true},
  {id: 2, name: 'KafaKafe', isFavorite: false},
  {id: 3, name: 'BugG', isFavorite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(cafeler);
  const [showOnylFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSeleted) {
    setShowOnlyFavorites(isFavoriteSeleted);
    isFavoriteSeleted
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(cafeler);
  }

  return (
    <SafeAreaView style={{margin: 10}}>
      <View>
        <Text>Show Only Favorites</Text>
      </View>
      <Switch
        style={{display: 'flex', alignSelf: 'flex-start', margin: 10}}
        value={showOnylFavorites}
        onValueChange={onFavoritesChange}
      />
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
