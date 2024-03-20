//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/ProductCard';
import {getRequest} from '../../service/verbs';
import {screenStyles} from '../../styles/screenStyle';

// create a component
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getRequest(PRODUCTS_URL)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <View style={screenStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductCard item={item} />}
      />
    </View>
  );
};

export default ProductList;
