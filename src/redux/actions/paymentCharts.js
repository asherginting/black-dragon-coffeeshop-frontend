import http from '../../helpers/http';

export const getPaymentChart = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/products/${id}`)
  };
};
