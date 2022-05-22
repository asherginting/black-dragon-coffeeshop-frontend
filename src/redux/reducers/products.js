const productsState = {
  results: [],
  pageInfo: {},
  isLoading: false,
  isError: false
};

export const productList = (state = productsState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING': {
      state.isLoading = true;
      state.isError = false;
      state.results = [];
      state.pageInfo = {};
      return { ...state };
    }
    case 'GET_PRODUCTS_FULFILLED': {
      const { data } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.results = data.results;
      state.pageInfo = data.pageInfo;
      return { ...state };
    }
    case 'GET_PRODUCTS_REJECTED': {
      state.isError = true;
      state.isLoading = false;
      return { ...state };
    }
    case 'GET_NEXT_PRODUCTS_PENDING': {
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'GET_NEXT_PRODUCTS_FULFILLED': {
      const { data } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.results.push(...data.results);
      state.pageInfo = data.pageInfo;
      return { ...state };
    }
    case 'GET_NEXT_PRODUCTS_REJECTED': {
      state.isError = true;
      state.isLoading = false;
      return { ...state };
    }

    case 'CLEAR_PRODUCT_LIST': {
      state.isLoading = false;
      state.isError = false;
      state.results = [];
      state.pageInfo = {};
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
