import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3000/user/signin', {
      email,
      password,
    });

    dispatch({type: 'LOGIN', payload: res.data});
  } catch (error) {
    dispatch({type: 'LOGIN_FAILED', payload: error});

};

