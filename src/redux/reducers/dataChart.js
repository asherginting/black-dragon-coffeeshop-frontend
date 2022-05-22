const counterState = {
  totalPrice: 0,
  price: 0,
  idProduct: null,
  totalItem: 1,
  sizePrd: 'large',
  idSize: 2,
  delivery: 'dine in',
  idDelivery: 1,
  deliveryTime: null
};

const dataChart = (state = counterState, action) => {
  switch (action.type) {
    case 'SET_DATA_PRODUCT': {
      const { id } = action.payload;
      // state.totalPrice = price;
      // console.log('price', action.payload);
      state.idProduct = id;
      return { ...state };
    }
    case 'COUNTER_INCREMENT': {
      // const { price } = action.payload;
      state.totalItem += 1;
      // state.price = price;
      return { ...state };
    }
    case 'COUNTER_DECREMENT': {
      state.totalItem -= 1;
      return { ...state };
    }
    case 'SET_SIZEPRD': {
      const { name, idSize } = action.payload;
      state.sizePrd = name;
      state.idSize = idSize;
      return { ...state };
    }
    case 'SET_DELIVERY': {
      const { name, id } = action.payload;
      state.delivery = name;
      state.idDelivery = id;
      return { ...state };
    }
    case 'SET_DELIVERY_TIME': {
      const { time } = action.payload;
      state.deliveryTime = time;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default dataChart;
