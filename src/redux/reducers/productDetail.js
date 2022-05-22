const productDetailState = {
  results: {},
  isError: false,
  isLoading: false
};

const productDetail = (state = productDetailState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DETAIL_PENDING': {
      state.isError = false;
      state.results = {};
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_PRODUCT_DETAIL_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      return { ...state };
    }
    case 'GET_PRODUCT_DETAIL_REJECTED': {
      state.results = {};
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default productDetail;
