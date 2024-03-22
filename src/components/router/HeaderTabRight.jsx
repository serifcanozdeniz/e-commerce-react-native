//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';

// create a component
const HeaderTabRight = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.button}>
        {count > 0 && (
          <View
            style={{
              backgroundColor: AppColors.PRIMARY,
              justifyContent: 'center',
              alignItems: 'center',
              width: 20,
              height: 20,
              borderRadius: 100,
              position: 'absolute',
              zIndex: 99,
              right: -10,
              top: -8,
            }}>
            <Text
              style={{color: AppColors.WHITE, fontSize: 12, fontWeight: '500'}}>
              {count}
            </Text>
          </View>
        )}
        <ShoppingCart size={28} color={AppColors.BLACK} variant="Bold" />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
});

//make this component available to the app
export default HeaderTabRight;
