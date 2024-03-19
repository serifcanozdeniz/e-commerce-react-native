//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/WidgetTitle';
import {getRequest} from '../service/verbs';
import WidgetProductCard from '../components/widgets/ProductCard';
import {CATEGORY_URL} from '../service/urls';

// create a component
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = () => {
    getRequest(CATEGORY_URL + "/men's clothing")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default BestSeller;
