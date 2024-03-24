//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/CategoryCard';
import {screenStyles} from '../../styles/screenStyle';
import Spinner from '../../components/ui/Spinner';

// create a component
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = () => {
    setIsLoading(true);
    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  activeCategory: {
    padding: 12,
    backgroundColor: AppColors.PRIMARY,
    marginRight: 8,
    borderRadius: 100,
  },
  inActiveCategory: {
    padding: 12,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});

//make this component available to the app
export default Categories;
