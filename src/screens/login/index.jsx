//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {screenStyles} from '../../styles/screenStyle';
import {height, width} from '../../utils/constants';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';

// create a component
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isRequiredUsername, setIsRequiredUsername] = useState(true);
  const [isRequiredPassword, setIsRequiredPassword] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const {setIsLogin} = useContext(StoreContext);

  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
      setIsRequiredUsername(true);
    } else setIsRequiredUsername(false);
    if (password) {
      form.password = password;
      setIsRequiredPassword(true);
    } else setIsRequiredPassword(false);
    if (password && username) {
      setDisableButton(true);
      postRequest(LOGIN_URL, form)
        .then(res => {
          setIsLogin(true);
          navigation.goBack();
        })
        .catch(err => console.log(err))
        .finally(() => setDisableButton(false));
    }
  };
  return (
    <View style={screenStyles.container}>
      <ScrollView>
        <View style={{padding: 20}}>
          <Image
            source={require('../../assets/icon/buy.png')}
            style={{
              width: width * 0.2,
              height: height * 0.1,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>

        <View>
          <Input
            size="large"
            status={isRequiredUsername ? 'basic' : 'danger'}
            caption={!isRequiredUsername ? 'Kullanıcı Adı zorunlu' : null}
            style={{marginVertical: 10}}
            value={username}
            label="Kullanıcı Adı"
            placeholder="Kullanıcı Adı"
            onChangeText={nextValue => setUsername(nextValue)}
          />
          <Input
            size="large"
            status={isRequiredPassword ? 'basic' : 'danger'}
            caption={!isRequiredPassword ? 'Şifre zorunlu' : null}
            style={{marginVertical: 10}}
            value={password}
            label="Şifre"
            secureTextEntry={secureTextEntry}
            placeholder="Şifre"
            accessoryRight={
              secureTextEntry ? (
                <EyeSlash
                  size="24"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <Eye
                  size="24"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            }
            onChangeText={nextValue => setPassword(nextValue)}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            disabled={disableButton}
            onPress={login}
            style={{marginVertical: 10}}
            status="success">
            Giriş Yap
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
