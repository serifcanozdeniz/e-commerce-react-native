//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/WidgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL, PRODUCTS_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/ProductCard';

// create a component
const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing", {limit: 5})
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getNewArrivalProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} />
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
export default NewArrival;
