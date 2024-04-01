//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

// create a component
const Empty = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          Favorilerinizde ürün bulunmuyor
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}
        status="info">
        Ürünler
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 2,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default Empty;
