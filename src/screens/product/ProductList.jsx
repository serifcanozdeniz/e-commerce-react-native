//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/ProductCard';
import {getRequest} from '../../service/verbs';
import {screenStyles} from '../../styles/screenStyle';
import Spinner from '../../components/ui/Spinner';
import CategorySelect from '../../components/widgets/CategorySelect';

// create a component
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setIsLoading(true);
    getRequest(url)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <View style={screenStyles.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
