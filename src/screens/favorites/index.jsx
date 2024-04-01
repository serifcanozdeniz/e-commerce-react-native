//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenStyles} from '../../styles/screenStyle';
import StoreContext from '../../context';
import FavoritesCard from '../../components/favorites/FavoritesCard';
import Empty from '../../components/ui/Empty';

// create a component
const Favorites = () => {
  const {favorites} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      <FlatList
        ListEmptyComponent={() => <Empty />}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <FavoritesCard item={item} />}
        xw
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Favorites;
