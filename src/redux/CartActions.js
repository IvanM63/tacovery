//Add item to cart
export const addToCart = item => {
  return async dispatch => {
    console.log('item', item);
    dispatch({type: 'ADD_TO_CART', payload: item});
  };
};

//Remove item from cart
export const removeFromCart = item => {
  return async dispatch => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item});
  };
};

export const selectCartItems = state => state.CartReducers.items;

export const selectCartItemsById = (state, id) =>
  state.CartReducers.items.filter(item => item._id === id);

export const selectCartTotal = state => {
  let total = 0;
  state.CartReducers.items.forEach(item => {
    total += item.price;
  });
  return total.toFixed(0);
};
