import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './Banner.style';
import news_banner_data from '../../news_banner_data.json';

const Banner = () => {
  return (
    <ScrollView horizontal>
      {news_banner_data.map(bannerNews => (
        <Image
          // key olmadan da çalışıyor ama eklemek daha iyi olabilir
          //key={bannerNews.id}
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
