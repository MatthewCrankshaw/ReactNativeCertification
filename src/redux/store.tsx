import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import cartReducer from './feature/cartSlice';

const middlewares: any = [thunk];

if (__DEV__) { // eslint-disable-line
    const createFlipperMiddleware = require('rn-redux-middleware-flipper').default;
    middlewares.push(createFlipperMiddleware());
}

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

export default store; 