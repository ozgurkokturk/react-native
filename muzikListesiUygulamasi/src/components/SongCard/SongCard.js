import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image
        key={props.song.id}
        style={styles.image}
        source={{uri: props.song.imageUrl}}
      />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {
            // UZUN YOL
            /* {props.song.isSoldOut === true ? (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>Tükendi</Text>
            </View>
          ) : null} */
          }

          {
            // KISA YOL
            props.song.isSoldOut && (
              <View style={styles.soldout_container}>
                <Text style={styles.soldout_title}>Tükendi</Text>
              </View>
            )
          }
        </View>
      </View>
    </View>
  );
};

export default SongCard;
