//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import Counter from '../ui/Counter';

// create a component
const CartCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={{
            width: width * 0.2,
            height: height * 0.1,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>

      <View style={{flex: 4, paddingHorizontal: 8}}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.GRAY,
            textTransform: 'capitalize',
          }}>
          {item.category}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          ${item.price}
        </Text>
      </View>

      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Counter onChange={value => console.log(value)} size={20} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
});

//make this component available to the app
export default CartCard;
