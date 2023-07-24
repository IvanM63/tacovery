import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {Image, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {co} from '../../delivery-app/dist/static/sanity-7d30f627';

import Google from '../assets/icons/google_icon.png';
import Facebook from '../assets/icons/facebook_icon.png';
import {useNavigation} from '@react-navigation/native';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingWrapper>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View style={stylesSearch.titleContainer}>
          {/* ICON COMPONENT */}
          <Text style={stylesSearch.textTitle}>Register</Text>
          <Text style={stylesSearch.textSubTitle}>Create Your Account</Text>
        </View>
        {/* Register FORM */}

        <View style={loginFormStyle.loginForm}>
          {/* FUll NAME */}
          <Text style={loginFormStyle.textSubTitle}>Full Name</Text>
          <TextInput
            style={loginFormStyle.loginInput}
            placeholder="Full Name"
          />
          {/* EMAIL */}
          <Text style={loginFormStyle.textSubTitle}>Email</Text>
          <TextInput
            style={loginFormStyle.loginInput}
            placeholder="example@gmail.com"
          />
          {/* DATE OF BIRTH */}
          <Text style={loginFormStyle.textSubTitle}>Date of Birth</Text>
          <TextInput
            style={loginFormStyle.loginInput}
            placeholder="DD/MM/YYYY"
          />
          {/* PASSWORD */}
          <Text sec style={loginFormStyle.textSubTitle}>
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={loginFormStyle.loginInput}
            placeholder="Password"
          />
          {/* CONFIRM PASSWORD */}
          <Text style={loginFormStyle.textSubTitle}>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            style={loginFormStyle.loginInput}
            placeholder="Confirm Password"
          />
          {/* OTHER REGISTER */}
          <View style={otherLoginStyle.otherLoginContainer}>
            <TouchableOpacity style={otherLoginStyle.otherButton}>
              <Image source={Google} />
            </TouchableOpacity>
            <TouchableOpacity style={otherLoginStyle.otherButton}>
              <Image source={Facebook} />
            </TouchableOpacity>
          </View>
          {/* REGISTER BUTTON */}
          <TouchableOpacity style={loginFormStyle.loginButton}>
            <Text style={loginFormStyle.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>I'm already a member</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{marginHorizontal: 5, color: COLORS.primaryDarker}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const loginFormStyle = StyleSheet.create({
  textSubTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  loginForm: {
    flexDirection: 'column',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  loginInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 14,
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
    height: 45,
    marginVertical: 10,
  },
});

const stylesSearch = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 35,
    marginHorizontal: 30,
  },
  textTitle: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textSubTitle: {
    color: 'black',
    fontSize: SIZES.large,
    textAlign: 'center',
  },
});
