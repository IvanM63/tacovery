import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './src/slices/CartSlice';
import RestaurantSlice from './src/slices/RestaurantSlice';

export const store = configureStore({
  reducer: {
    Cart: CartSlice,
    Restaurant: RestaurantSlice,
  },
});
