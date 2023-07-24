const initialState = {
  authToken: null,
  user: {},
  message: {
    message: null,
    messageType: null,
  },
};

export default (state = initialState, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state, //copy all previous state
      authToken: action.payload.data._id,
      user: action.payload.data,
      message: {
        message: action.payload.message,
        messageType: action.payload.status,
      },
    };
  } else if (action.type === 'LOGIN_FAILED') {
    return {
      ...state,
      message: {
        message: action.payload.message,
        messageType: action.payload.status,
      },
    };
  }

  return state;
};
