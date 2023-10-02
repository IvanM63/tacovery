import axios from 'axios';
import {BASE_URI} from '../../constant';

//Set Restaurant
export const setRestaurant = restaurant => {
  return async dispatch => {
    try {
      //console.log('Sukses set Restaurant', restaurant);
      dispatch({type: 'SET_RESTAURANT', payload: restaurant});
    } catch (error) {
      console.log(error);
    }
  };
};

//Get all food from restaurant by id
export const setFoodsRestaurant = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URI}/food/restaurant/${id}`);
      if (res.data.status === 'SUCCESS') {
        //console.log('Sukses get Food Restaurant', res.data.data);
        dispatch({type: 'SET_FOOD_RESTAURANT', payload: res.data.data});
      } else {
        console.log('Gagal get Food Restaurant', res.data.message);
        //dispatch({type: 'GET_FOOD_RESTAURANT_FAILED', payload: res.data});
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//Get restaurants from featured restaurant and put it in an array
export const getFeaturedRestaurant = name => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URI}/featuredRestaurant/${name}`);
      if (res.data.status === 'SUCCESS') {
        console.log('Sukses get Featured Restaurant', res.data.data[0]);
        dispatch({type: 'SET_FEATURED_RESTAURANT', payload: res.data.data[0]});
      } else {
        console.log('Gagal get Featured Restaurant', res.data.message);
        //dispatch({type: 'GET_FEATURED_RESTAURANT_FAILED', payload: res.data});
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//get all featured restaurants
export const getAllFeatured = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URI}/featuredRestaurant/`);
      if (res.data.status === 'SUCCESS') {
        console.log('Sukses get All Featured Restaurant', res.data.data);
        dispatch({type: 'SET_FEATURED', payload: res.data.data});
      } else {
        console.log('Gagal get All Featured Restaurant', res.data.message);
        //dispatch({type: 'GET_FEATURED_RESTAURANT_FAILED', payload: res.data});
      }
    } catch (error) {
      console.log(error);
    }
  };
};
