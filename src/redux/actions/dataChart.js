export const increment = () => {
  return {
    type: 'COUNTER_INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER_DECREMENT'
  };
};

export const setDataProduct = (id) => {
  return {
    type: 'SET_DATA_PRODUCT',
    payload: {
      id
    }
  };
};

export const setSizePrd = (name, id) => {
  return {
    type: 'SET_SIZEPRD',
    payload: {
      name,
      idSize: id
    }
  };
};

export const setDelivery = (name, id) => {
  return {
    type: 'SET_DELIVERY',
    payload: {
      name,
      id
    }
  };
};

export const setDeliveryTIme = (time) => {
  return {
    type: 'SET_DELIVERY_TIME',
    payload: {
      time
    }
  };
};
