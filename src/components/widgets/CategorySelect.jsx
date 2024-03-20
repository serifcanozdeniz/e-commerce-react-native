//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

// create a component
const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  };

  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          category == item ? styles.activeCategory : styles.inActiveCategory
        }>
        <Text style={{fontWeight: 300}}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
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
export default CategorySelect;
