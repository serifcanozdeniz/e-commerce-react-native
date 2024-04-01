//import liraries
import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import StoreContext from '../../context';
import ProfileMenu from './ProfileMenu';
import UserInfo from '../../components/profile/UserInfo';
import {screenStyles} from '../../styles/screenStyle';
import {Button} from '@ui-kitten/components';
import {LOGIN} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

// create a component
const Profile = () => {
  const navigation = useNavigation();
  const {isLogin} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Lütfen giriş yapınız
            </Text>
          </View>
          <Button
            size="large"
            onPress={() => navigation.navigate(LOGIN)}
            style={{marginVertical: 10}}
            status="info">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
};

export default Profile;
