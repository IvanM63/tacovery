const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  } else if (action.type === 'REMOVE_FROM_CART') {
    const index = state.items.findIndex(
      item => item._id === action.payload._id,
    );
    if (index >= 0) {
      state.items.splice(index, 1);
    } else {
      console.warn(
        `Can't remove product (id: ${action.payload._id}) as its not in cart!`,
      );
    }
  } else if (action.type === 'EMPTY_CART') {
    return {
      ...state,
      items: [],
    };
  }
  return state;
};
