import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

const { NODE_ENV } = process.env;

let store;

if (NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    applyMiddleware(
      promise,
      logger
    )
  );
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(
      promise
    )
  );
}

export default store;
