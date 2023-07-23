import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {Image, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {co} from '../../delivery-app/dist/static/sanity-7d30f627';

import Google from '../assets/icons/google_icon.png';
import Facebook from '../assets/icons/facebook_icon.png';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        {/* GREEN BACKGROUND UPPER */}
        <View
          style={{
            backgroundColor: COLORS.primary,
            borderBottomStartRadius: 60,
            borderBottomEndRadius: 60,
            height: 180,
            width: '100%',
            position: 'absolute',
          }}>
          <Image
            source={require('../assets/images/FoodDoodle.png')}
            style={{
              borderBottomRightRadius: 60,
              borderBottomLeftRadius: 60,
              height: 180,
              width: '100%',
              position: 'absolute',
              opacity: 0.15,
            }}
          />
        </View>
        {/* <Image source={require('../assets/images/FoodDoodle.png')} /> */}
        {/* SEARCH BAR */}
        <View style={stylesSearch.titleContainer}>
          {/* ICON COMPONENT */}
          <Text style={stylesSearch.textTitle}>Login</Text>
          <Text style={stylesSearch.textSubTitle}>Access Account</Text>
        </View>
        {/* OTHER LOGIN */}
        <View style={otherLoginStyle.otherLoginContainer}>
          <TouchableOpacity style={otherLoginStyle.otherButton}>
            <Image source={Google} />
          </TouchableOpacity>
          <TouchableOpacity style={otherLoginStyle.otherButton}>
            <Image source={Facebook} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'gray',
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 15,
          }}>
          Or login with Email
        </Text>
        {/* LOGIN FORM */}
        <View style={loginFormStyle.loginForm}>
          <Text style={loginFormStyle.textSubTitle}>Email</Text>
          <TextInput
            style={loginFormStyle.loginInput}
            placeholder="example@gmail.com"
          />
          <Text sec style={loginFormStyle.textSubTitle}>
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={loginFormStyle.loginInput}
            placeholder="Password"
          />
          <TouchableOpacity style={loginFormStyle.loginButton}>
            <Text style={loginFormStyle.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={{marginHorizontal: 5, color: COLORS.primaryDarker}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const loginFormStyle = StyleSheet.create({
  textSubTitle: {
    color: 'black',
    fontSize: SIZES.medium,
    fontWeight: '500',
    textAlign: 'left',
  },
  loginForm: {
    flexDirection: 'column',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  loginInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: SIZES.medium,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
  },
});

const otherLoginStyle = StyleSheet.create({
  otherButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  otherLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});

const stylesSearch = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    borderRadius: 15,
    marginVertical: 20,
    marginHorizontal: 30,
    height: 180,
  },
  textTitle: {
    flex: 1,
    color: 'black',
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textSubTitle: {
    flex: 1.5,
    color: 'black',
    fontSize: SIZES.large,
    textAlign: 'center',
  },
});

const stylesText = StyleSheet.create({
  textLocation: {
    color: 'white',
    fontSize: 20,
  },
  textDays: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textTemperature: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  textWeatherStatus: {
    color: 'white',
    fontSize: 18,
  },
  textWeatherStatusNominal: {
    color: 'white',
    fontSize: 13,
  },
});
