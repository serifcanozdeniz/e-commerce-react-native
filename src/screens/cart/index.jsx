//import liraries
import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import StoreContext from '../../context';
import CartCard from '../../components/cart/CartCard';
import {screenStyles} from '../../styles/screenStyle';
import Summary from '../../components/cart/Summary';

// create a component
const Cart = () => {
  const {cart} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={item => item.id}
      />
      <Summary />
    </View>
  );
};

export default Cart;
