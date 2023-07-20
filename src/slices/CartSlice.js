import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in cart!`,
        );
      }
    },
    emptyCart: state => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, emptyCart} = CartSlice.actions;

export const selectCartItems = state => state.Cart.items;

export const selectCartItemsById = (state, id) =>
  state.Cart.items.filter(item => item.id === id);

export const selectCartTotal = state => {
  let total = 0;
  state.Cart.items.forEach(item => {
    total += item.price;
  });
  return total.toFixed(0);
};

export default CartSlice.reducer;
