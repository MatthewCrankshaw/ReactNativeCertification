import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import cartReducer from './cartSlice';

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

store.dispatch({type: 'cart/added', payload: {item: 'item 2',price: 20,quantity: 3}});

export default store; 