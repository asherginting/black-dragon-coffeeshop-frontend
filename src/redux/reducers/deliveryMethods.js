const deliveryState = {
  results: [],
  isLoading: false,
  isError: false
};

export const deliveryMethods = (state = deliveryState, action) => {
  switch (action.type) {
    case 'GET_DELIVERY_METHODS_PENDING': {
      state.isError = false;
      state.isLoading = false;
      return { ...state };
    }
    case 'GET_DELIVERY_METHODS_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      return { ...state };
    }
    case 'GET_DELIVERY_METHODS_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
