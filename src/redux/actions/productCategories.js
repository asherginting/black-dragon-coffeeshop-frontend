import http from '../../helpers/http';

export const getProductCategories = () => {
  return {
    type: 'GET_PRODUCT_CATEGORIES',
    payload: http().get('/categories?page=1&limit=100')
  };
};
