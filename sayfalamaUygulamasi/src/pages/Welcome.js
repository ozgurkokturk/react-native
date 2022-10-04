import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Button from '../Components/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Free BodyBuilding</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    textAlign: 'center',
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Welcome;
