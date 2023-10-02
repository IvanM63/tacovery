import {
  configureStore,
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';

import UserReducers from './User/UserReducers';
import RestaurantsReducers from './Restaurants/RestaurantsReducers';
import CartReducers from './Cart/CartReducers';

import thunk from 'redux-thunk';

const RootReducers = combineReducers({
  UserReducers,
  RestaurantsReducers,
  CartReducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));

// export const store = configureStore({
//   reducer: {
//     Cart: CartSlice,
//     Restaurant: RestaurantSlice,
//   },
// });
