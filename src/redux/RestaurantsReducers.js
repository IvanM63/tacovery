const initialState = {
  Restaurant: null,
  Featured: [],
  FeaturedRestaurant: null,
  FoodMenu: [],
};

export default (state = initialState, action) => {
  if (action.type === 'SET_RESTAURANT') {
    return {
      ...state,
      Restaurant: action.payload,
    };
  } else if (action.type === 'SET_FEATURED_RESTAURANT') {
    return {
      ...state,
      FeaturedRestaurant: action.payload,
    };
  } else if (action.type === 'SET_FEATURED') {
    return {
      ...state,
      Featured: action.payload,
    };
  } else if (action.type === 'SET_FOOD_RESTAURANT') {
    return {
      ...state,
      FoodMenu: action.payload,
    };
  }

  return state;
};
