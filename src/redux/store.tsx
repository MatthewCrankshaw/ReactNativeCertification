import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

let persistor = persistStore(store);

export {store, persistor};
