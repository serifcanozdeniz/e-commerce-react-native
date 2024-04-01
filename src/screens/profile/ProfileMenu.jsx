//import liraries
import {
  ArrowRight2,
  Book,
  CardPos,
  Heart,
  Location,
  Notification,
  UserEdit,
} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

// create a component
const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Profili Düzenle',
      icon: <UserEdit size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Adres',
      icon: <Location size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'İstek Listesi',
      icon: <Heart size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Satın Alma Geçmişi',
      icon: <Book size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Bildirimler',
      icon: <Notification size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Kayıtlı Kartlarım',
      icon: <CardPos size={25} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={index}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
              marginVertical: 10,
            }}>
            {item.icon}
            <Text style={{fontSize: 16, marginLeft: 15, fontWeight: '600'}}>
              {item.title}
            </Text>
          </View>
          <ArrowRight2 size={30} color={AppColors.GRAY} />
        </TouchableOpacity>
      ))}
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
export default ProfileMenu;
