import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Categories from '../screens/categories';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import {AppColors} from '../theme/colors';
import TabIcon from '../components/router/TabIcon';
import {ShoppingCart} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => (
          <TouchableOpacity style={{marginHorizontal: 10}}>
            <ShoppingCart size={30} color={AppColors.BLACK} variant="Bold" />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
