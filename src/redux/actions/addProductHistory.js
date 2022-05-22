import http from '../../helpers/http';

export const addProductHistory = (token, historyId, productId, sizeId, qty) => {
  const param = new URLSearchParams();
  param.append('history_id', historyId);
  param.append('product_id', productId);
  param.append('size_id', sizeId);
  param.append('qty', qty);
  return {
    type: 'ADD_PRODUCT_HISTORY',
    payload: http(token).post('/productHistory', param)
  };
};
