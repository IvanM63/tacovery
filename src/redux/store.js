import {
  configureStore,
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import CartSlice from '../slices/CartSlice';
import RestaurantSlice from '../slices/RestaurantSlice';
import UserReducers from './UserReducers';
import thunk from 'redux-thunk';

const RootReducers = combineReducers({UserReducers});

export const store = createStore(RootReducers, applyMiddleware(thunk));

// export const store = configureStore({
//   reducer: {
//     Cart: CartSlice,
//     Restaurant: RestaurantSlice,
//   },
// });
