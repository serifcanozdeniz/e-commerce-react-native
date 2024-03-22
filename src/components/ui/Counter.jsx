//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

// create a component
const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const increase = () => {
    {
      setCount(count + 1);
      onChange(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button}>
        <MinusCirlce size={35} variant="Outline" color={AppColors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          fontVariant: '500',
          flex: 1,
          textAlign: 'center',
        }}>
        {count}
      </Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
        <AddCircle size={35} variant="Bold" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.SOFTGRAY,
    padding: 3,
    borderRadius: 100,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Counter;
