import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import {Image, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {co} from '../../../delivery-app/dist/static/sanity-7d30f627';

import Google from '../../assets/icons/google_icon.png';
import Facebook from '../../assets/icons/facebook_icon.png';
import {useNavigation} from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import {Register, setMessage} from '../../redux/User/UserActions';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const message = useSelector(state => state.UserReducers.message);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //date configuration
  const [date, setDate] = useState(new Date(2001, 0, 1));
  const [show, setShow] = useState(false);
  //Actual date
  const [realDate, setRealDate] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setRealDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode(true);
  };

  const handleMessage = (message, messageType) => {
    dispatch(setMessage({message: message, messageType: messageType}));
  };

  const handleRegister = () => {
    setIsSubmitting(true);
    if (
      name === '' ||
      email === '' ||
      realDate === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      handleMessage('Please fill all fields', 'FAILED');
      setIsSubmitting(false);
    } else if (password !== confirmPassword) {
      handleMessage('Password does not match', 'FAILED');
      setIsSubmitting(false);
    } else {
      const userRegister = {
        name: name,
        email: email,
        dateOfBirth: realDate,
        password: password,
      };
      //dispatch for register
      dispatch(Register(userRegister));
      setIsSubmitting(false);
    }
  };
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
            value={name}
            onChangeText={setName}
            style={loginFormStyle.loginInput}
            placeholder="Full Name"
          />
          {/* EMAIL */}
          <Text style={loginFormStyle.textSubTitle}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={loginFormStyle.loginInput}
            placeholder="example@gmail.com"
          />
          {/* DATE OF BIRTH */}
          <Text style={loginFormStyle.textSubTitle}>Date of Birth</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <TouchableOpacity onPress={showDatepicker}>
            <TextInput
              value={realDate ? realDate.toDateString() : ''}
              style={loginFormStyle.loginInput}
              placeholder="DD/MM/YYYY"
              editable={false}
              showDatepicker={showDatepicker}
            />
          </TouchableOpacity>
          {/* PASSWORD */}
          <Text sec style={loginFormStyle.textSubTitle}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={loginFormStyle.loginInput}
            placeholder="Password"
          />
          {/* CONFIRM PASSWORD */}
          <Text style={loginFormStyle.textSubTitle}>Confirm Password</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
          {/* MESSAGE TEXT */}
          {message.message ? (
            <Text
              style={
                message.messageType === 'SUCCESS'
                  ? loginFormStyle.messageTextGreen
                  : loginFormStyle.messageTextRed
              }>
              {message.message}
            </Text>
          ) : null}
          {/* REGISTER BUTTON */}
          {!isSubmitting && (
            <TouchableOpacity
              onPress={handleRegister}
              style={loginFormStyle.loginButton}>
              <Text style={loginFormStyle.loginButtonText}>Register</Text>
            </TouchableOpacity>
          )}
          {isSubmitting && (
            <TouchableOpacity
              onPress={handleRegister}
              style={loginFormStyle.loginButton}>
              <ActivityIndicator size="large" color="white" />
            </TouchableOpacity>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>I'm already a member</Text>
            <TouchableOpacity
              onPress={() => {
                handleMessage(null, null);
                navigation.navigate('LoginScreen');
              }}>
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
    color: 'black',
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
  messageTextRed: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 15,
  },
  messageTextGreen: {
    color: 'green',
    textAlign: 'center',
    marginVertical: 5,
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
