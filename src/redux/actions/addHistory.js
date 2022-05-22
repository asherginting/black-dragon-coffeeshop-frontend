import http from '../../helpers/http';

export const addHistory = (token, deliveryTime, subtotal, total, reservationTime, shippingCost, taxtId, deliveryMethodId, paymentMethodId) => {
  const param = new URLSearchParams();
  param.append('delivery_time', deliveryTime);
  param.append('subtotal', subtotal);
  param.append('total', total);
  param.append('reservation_time', reservationTime);
  param.append('shipping_cost', shippingCost);
  param.append('tax_id', taxtId);
  param.append('delivery_method_id', deliveryMethodId);
  param.append('payment_method_id', paymentMethodId);
  return {
    type: 'ADD_HISTORY',
    payload: http(token).post('/histories', param)
  };
};
