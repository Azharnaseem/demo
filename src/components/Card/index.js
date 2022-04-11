import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import styles from '../Card/styles';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import logo2 from '../../assets/images/logo2.png';
import CommonStyles from '../../utills/CommonStyles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import rat from '../../assets/images/rat.png';
import AppColors from '../../utills/AppColors';

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
const Cards = ({title, description, image}) => {
  // const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <View>
          <Image resizeMode="contain" source={image} style={styles.image} />
          <Image resizeMode="contain" source={logo2} style={styles.image2} />
        </View>
        <View style={styles.ndChild}>
          <View style={styles.child}>
            <Text style={CommonStyles.text_bold}>{title}</Text>
            <View style={CommonStyles.rowAlignItemCenter}>
              <Rating
                type="custom"
                Rating={2.3 / 5}
                ratingImage={rat}
                ratingColor={AppColors.transparent}
                ratingBackgroundColor={AppColors.transparent}
                ratingCount={5}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{paddingVertical: 1}}
              />
              <Text>4.5(231)</Text>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.time}>
            <Icon name="clockcircleo" size={12} />
            <Text style={styles.text2}>Earliest collection 3 days</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Cards;
