const intialState = {
  isLoading: false,
  isError: false
};

const addProductHistory = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_HISTORY_PENDING': {
      state.isError = false;
      state.isLoading = true;
      return { ...state };
    }
    case 'ADD_PRODUCT_HISTORY_FULFILLED': {
      state.isError = false;
      state.isLoading = false;
      return { ...state };
    }
    case 'ADD_PRODUCT_HISTORY_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default addProductHistory;
