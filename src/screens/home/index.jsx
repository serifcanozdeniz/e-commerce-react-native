//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import widgets from '../../widget';
import {screenStyles} from '../../styles/screenStyle';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View style={screenStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};

//make this component available to the app
export default Home;
