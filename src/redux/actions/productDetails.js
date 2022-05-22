import http from '../../helpers/http';

export const getProductDetail = (id) => {
  return {
    type: 'GET_PRODUCT_DETAIL',
    payload: http().get(`/products/${id}`)
  };
};
