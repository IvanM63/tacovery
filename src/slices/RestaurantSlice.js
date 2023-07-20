import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Restaurant: null,
};

export const RestaurantSlice = createSlice({
  name: 'Restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.Restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = RestaurantSlice.actions;

export const selectRestaurant = state => state.Restaurant.Restaurant;

export default RestaurantSlice.reducer;
