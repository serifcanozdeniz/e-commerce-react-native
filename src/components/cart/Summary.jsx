//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../ui/Button';
import {AppColors} from '../../theme/colors';

// create a component
const Summary = () => {
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

      <Button title="Ödemeye Geç" />
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
