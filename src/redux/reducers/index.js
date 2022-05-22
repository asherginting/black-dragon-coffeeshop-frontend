import { combineReducers } from 'redux';
import auth from './auth';
import { productList } from './products';
import { deliveryMethods } from './deliveryMethods';
import productDetail from './productDetail';
import size from './size';
import dataChart from './dataChart';
import addCharts from './addCharts';
import paymentCharts from './paymentCharts';
import addHistory from './addHistory';
import addProductHistory from './addProductHistory';
import productCategories from './productCategories';

const rootReducer = combineReducers({
  auth,
  productList,
  productDetail,
  deliveryMethods,
  size,
  dataChart,
  addCharts,
  paymentCharts,
  addHistory,
  addProductHistory,
  productCategories
});

export default rootReducer;
