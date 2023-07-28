import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {getData, storeData} from '../util/AsyncStorage';

export const Init = () => {
  return async dispatch => {
    let user = await getData('user');
    if (user !== null) {
      dispatch({type: 'LOGIN_SUCCESS', payload: JSON.parse(user)});
    }
  };
};

export const Register = userRegister => {
  return async dispatch => {
    try {
      const res = await axios.post('http://192.168.100.5:3000/user/signup', {
        name: userRegister.name,
        email: userRegister.email,
        password: userRegister.password,
        dateOfBirth: userRegister.dateOfBirth,
      });
      if (res.data.status === 'SUCCESS') {
        console.log('Sukses Register', res.data);
        dispatch({type: 'REGISTER_SUCCESS', payload: res.data});
      } else {
        console.log('Gagal Register', res.data.message);
        dispatch({type: 'REGISTER_FAILED', payload: res.data});
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const Login = (email, password) => {
  return async dispatch => {
    try {
      const res = await axios.post('http://192.168.100.5:3000/user/signin', {
        email,
        password,
      });
      //if user data ditemukan
      if (res.data.status === 'SUCCESS') {
        //simpan data user ke asyncstorage
        storeData('user', JSON.stringify(res.data));
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
      } else {
        dispatch({type: 'LOGIN_FAILED', payload: res.data});
      }
    } catch (error) {
      console.log(error.JSON());
    }
  };
};

export const setMessage = message => {
  return {
    type: 'SET_MESSAGE',
    payload: message,
  };
};

// export const Login = (email, password) => {
//     const token = email + password;
//     return {
//       type: 'LOGIN',
//       payload: token,
//     };
//   };
