//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constants';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oki.jpg')}
        style={{
          width: 125,
          height: 125,
          resizeMode: 'cover',
          alignSelf: 'center',
          borderRadius: 100000,
        }}
      />
      <Text style={{fontWeight: '800', fontSize: 20, marginVertical: 10}}>
        Okan Özdeniz
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserInfo;
