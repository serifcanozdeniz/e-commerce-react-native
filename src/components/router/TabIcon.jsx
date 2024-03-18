//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../../utils/routes';
import {Home2, Category, Profile, Heart} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATEGORIES) {
    return <Category size={size} color={color} variant="Bold" />;
  } else if (name == FAVORITES) {
    return <Heart size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
});

//make this component available to the app
export default TabIcon;
