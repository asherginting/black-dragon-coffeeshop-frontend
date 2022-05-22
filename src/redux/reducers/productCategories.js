const initialState = {
  categories: [],
  productCategory: {},
  productCategoryLoading: false,
  productCategoryError: null
};

const productCategories = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_CATEGORIES_PENDING': {
      state.productCategoryLoading = true;
      state.productCategoryError = null;
      state.productCategory = {};
      state.categories = [];
      return { ...state };
    }

    case 'GET_PRODUCT_CATEGORIES_FULFILLED': {
      const { data } = action.payload;
      state.productCategoryLoading = false;
      state.productCategoryError = null;
      state.categories = data.result;
      return { ...state };
    }

    case 'GET_PRODUCT_CATEGORIES_REJECTED': {
      const { data } = action.payload.response;
      state.productCategoryLoading = false;
      state.productCategoryError = data.message;
      state.categories = [];
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default productCategories;
