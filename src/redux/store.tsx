import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import cartReducer from './feature/cartSlice';
import productReducer from './feature/productSlice';

const middlewares: any = [thunk];

if (__DEV__) {
  // eslint-disable-line
  const createFlipperMiddleware = require('rn-redux-middleware-flipper')
    .default;
  middlewares.push(createFlipperMiddleware());
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
