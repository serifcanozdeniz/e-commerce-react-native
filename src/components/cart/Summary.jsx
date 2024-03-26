//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from '../ui/Button';
import {AppColors} from '../../theme/colors';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGIN} from '../../utils/routes';

// create a component
const Summary = () => {
  const {isLogin} = useContext(StoreContext);
  const navigation = useNavigation();

  const checkOut = () => {
    if (isLogin) {
      navigation.navigate(CHECKOUT);
    } else {
      Alert.alert('Giriş Yap', 'Satın alma işlemi için giriş yapınız.', [
        {
          text: 'Vazgeç',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Giriş Yap', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Subtotal</Text>
        <Text style={{fontWeight: 'bold'}}>800</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Delivery Fee</Text>
        <Text style={{fontWeight: 'bold'}}>800</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Discount</Text>
        <Text style={{fontWeight: 'bold'}}>800</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: AppColors.GRAY}}>Total</Text>
        <Text style={{fontWeight: 'bold'}}>800</Text>
      </View>

      <Button onPress={checkOut} title="Ödemeye Geç" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: AppColors.PRIMARY,
  },
});

//make this component available to the app
export default Summary;
