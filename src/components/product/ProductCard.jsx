//import liraries
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGIN, PRODUCTDETAIL} from '../../utils/routes';
import Button from '../ui/Button';
import StoreContext from '../../context';

// create a component
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart, addFavorites, isLogin} = useContext(StoreContext);

  const checkIsLogin = () => {
    if (isLogin) {
      addFavorites(item);
    } else {
      Alert.alert('Giriş Yap', 'Favorilere eklemek için için giriş yapınız.', [
        {
          text: 'Vazgeç',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Giriş Yap', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          resizeMode: 'contain',
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={3}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 14,
              color: AppColors.GRAY,
            }}>
            {item.category}
          </Text>
          <Text
            style={{
              fontWeight: '700',
              marginVertical: 5,
              fontSize: 14,
              color: AppColors.BLACK,
            }}>
            ${item.price}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => checkIsLogin()}>
            {item.favorite ? (
              <Heart size="24" color={AppColors.RED} variant="Bold" />
            ) : (
              <Heart size="24" color={AppColors.RED} variant="Outline" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button onPress={() => addCart(item)} title={'Sepete Ekle'} />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 5,
    flex: 1,
    marginVertical: 15,
  },
});

//make this component available to the app
export default ProductCard;
