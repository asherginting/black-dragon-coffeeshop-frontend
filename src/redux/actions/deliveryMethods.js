import http from '../../helpers/http';

export const getDeliveryMethods = () => {
  return {
    type: 'GET_DELIVERY_METHODS',
    payload: http().get('/deliveryMethods?page=1&limit=6')
  };
};
