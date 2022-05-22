const intialState = {
  results: {},
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const addHistory = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY_PENDING': {
      state.isError = false;
      state.isLoading = true;
      state.results = {};
      state.errorMessage = '';
      return { ...state };
    }
    case 'ADD_HISTORY_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      state.errorMessage = '';
      return { ...state };
    }
    case 'ADD_HISTORY_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = message;
      return { ...state };
    }
    case 'DELETE_RESULTS': {
      state.results = {};
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default addHistory;
