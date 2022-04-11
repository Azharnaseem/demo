import React from 'react';
import {View, FlatList} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import Cards from '../../components/Card';
import Card from '../../components/Card';
import {shopsData} from '../../utills/dummyData';
import styles from '../LoginScreen/Styles';

function CardView() {
  const _renderItem = ({item, index}) => {
    return (
      <Cards
        title={item.title}
        description={item.description}
        image={item.image}
      />
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <FlatList
          data={shopsData}
          keyExtractor={({item, index}) => String(index)}
          renderItem={_renderItem}
        />
      </View>
    </ScreenWrapper>
  );
}

export default CardView;
