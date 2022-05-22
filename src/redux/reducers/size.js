const sizeState = {
  results: [],
  isError: false,
  isLoading: false
};

const size = (state = sizeState, action) => {
  switch (action.type) {
    case 'GET_SIZE_PENDING': {
      state.isError = false;
      state.results = [];
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_SIZE_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      return { ...state };
    }
    case 'GET_SIZE_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default size;
