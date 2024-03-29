//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/WidgetTitle';
import {getRequest} from '../service/verbs';
import WidgetProductCard from '../components/widgets/ProductCard';
import {CATEGORY_URL} from '../service/urls';
import CategorySelect from '../components/widgets/CategorySelect';

// create a component
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = (category = "men's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5, sort: 'desc'})
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} category="men's clothing" />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
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
