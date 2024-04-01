//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {screenStyles} from '../../styles/screenStyle';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/Button';
import Counter from '../../components/ui/Counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/ui/Spinner';
import {Heart, Star} from 'iconsax-react-native';
import StoreContext from '../../context';
import {useContext} from 'react';
import {LOGIN} from '../../utils/routes';

// create a component
const ProductDetail = ({route, navigation}) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {addCart} = useContext(StoreContext);
  const {addFavorites} = useContext(StoreContext);
  const {isLogin} = useContext(StoreContext);

  const {item} = route?.params;

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

  const getProductDetail = () => {
    setLoading(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ScrollView>
            <View>
              <Image
                source={{uri: product?.image}}
                style={{
                  width: width,
                  height: height * 0.15,
                  resizeMode: 'contain',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 3, marginVertical: 20}}>
                  <Text
                    numberOfLines={2}
                    style={{fontWeight: '700', fontSize: 20}}>
                    {product?.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      marginVertical: 20,
                      color: AppColors.GRAY,
                    }}>
                    {product?.category.toUpperCase()}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      marginVertical: 5,
                    }}>
                    ${product?.price}
                  </Text>
                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Star color={'gold'} variant="Bold" size={25} />
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 18,
                        marginHorizontal: 5,
                      }}>
                      {product?.rating?.rate}/{product?.rating?.count}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => checkIsLogin()}
                    style={{
                      backgroundColor: AppColors.SOFTGRAY,
                      padding: 5,
                      borderRadius: 100,
                    }}>
                    {item.favorite ? (
                      <Heart size="24" color={AppColors.RED} variant="Bold" />
                    ) : (
                      <Heart
                        size="24"
                        color={AppColors.RED}
                        variant="Outline"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: 5,
                    color: AppColors.BLACK,
                  }}>
                  {product?.description}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          paddingBottom: 20,
          paddingHorizontal: 10,
          height: height * 0.1,
          backgroundColor: AppColors.WHITE,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: AppColors.SOFTGRAY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Counter onChange={value => console.log(value)} />
        </View>

        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button onPress={() => addCart(item)} title={'Sepete Ekle'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
