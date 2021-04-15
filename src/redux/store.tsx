import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import cartReducer from './feature/cartSlice';
import productReducer from './feature/productSlice';

const middlewares: Middleware[] = [thunk];

if (__DEV__) {
  const createFlipperMiddleware = require('rn-redux-middleware-flipper')
    .default;
  middlewares.push(createFlipperMiddleware());
}

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
