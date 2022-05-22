import http from '../../helpers/http';

export const products = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: http().get('/products?page=1&limit=8')
  };
};

export const getProductByCategory = (categoryName) => {
  return {
    type: 'GET_PRODUCTS',
    payload: http().get(`/products?page=1&limit=8&category_name=${categoryName}`)
  };
};

export const getFavoriteProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: http().get('/products/f/favorite?page=1&limit=8')
  };
};

export const getNextProducts = (page, defaultUrl) => {
  if (defaultUrl) {
    return {
      type: 'GET_NEXT_PRODUCTS',
      payload: http(null, false).get(defaultUrl)
    };
  }

  return {
    type: 'GET_NEXT_PRODUCTS',
    payload: http().get(`/products?page=${page}&limit=8`)
  };
};

export const clearProductList = () => {
  return {
    type: 'CLEAR_PRODUCT_LIST'
  };
};
