import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  //console.log(user);
  return (
    <View>
      <Text style={styles.message}>KAYIT TAMAMLANDI!</Text>
      <Text style={styles.label}>
        Üye Adı: <Text style={styles.text_inner}>{user.userName}</Text>
      </Text>
      <Text style={styles.label}>
        Üye Soyadı: <Text style={styles.text_inner}>{user.userSurname}</Text>
      </Text>
      <Text style={styles.label}>
        Üye Yaşı: <Text style={styles.text_inner}>{user.userAge}</Text>
      </Text>
      <Text style={styles.label}>
        Üye E-postası: <Text style={styles.text_inner}>{user.userMail}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  text_inner: {
    fontWeight: 'normal',
  },
});

export default MemberResult;
