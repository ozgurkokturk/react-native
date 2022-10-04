import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import Input from '../Components/input';
import Buton from '../Components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setuserSurname] = useState(null);
  const [userAge, setuserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Boş veri olamaz kardeş');
      return;
    }

    //userName: UserName demek yerine sadece userName dersek objeler o isimle oluşur
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üye adını giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyadını giriniz.."
        onChangeText={setuserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üye yaşını giriniz.."
        onChangeText={setuserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üye eposta adresini giriniz.."
        onChangeText={setUserMail}
      />
      <Buton text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
};

export default MemberSign;
