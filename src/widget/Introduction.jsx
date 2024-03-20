//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

// create a component
const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/nike.png')} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 7,
          backgroundColor: AppColors.PRIMARY,
          width: width * 0.4,
          height: height * 0.034,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{color: AppColors.BLACK, fontSize: 16, fontWeight: 'bold'}}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
});

//make this component available to the app
export default Introduction;
