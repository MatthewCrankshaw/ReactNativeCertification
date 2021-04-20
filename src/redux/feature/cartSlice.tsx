import {createSelector, createSlice} from '@reduxjs/toolkit';

import {CartProduct} from '../../types/types';

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state: any, action: any) {
      const updated = state.find((item: CartProduct) => {
        if (item.product.id == action.payload.product.id) {
          item.quantity++;
          return true;
        }
      });

      if (!updated) {
        state.push(action.payload);
      }
    },
    remove(state: any, action: any) {
      const index = state.findIndex((item: CartProduct) => {
        if (item.product.id == action.payload) {
          return true;
        }
      });

      if (index !== -1) {
        const item = state[index];
        if (item && item.quantity > 1) {
          item.quantity--;
        } else {
          state.splice(index, 1);
        }
      }
    },
    delete(state: any, action: any) {
      const index = state.findIndex((item: CartProduct) => {
        if (item.product.id == action.payload) {
          return true;
        }
      });

      state.splice(index, 1);
    },
  },
});

const selectCartEntities = (state: any) => state;

export const selectCartItems = createSelector(selectCartEntities, state => {
  return state.cart;
});

export const selectCartCount = createSelector(selectCartEntities, state => {
  return state.cart.length;
});

export const selectGrandTotal = createSelector(selectCartEntities, state => {
  let total = 0;
  state.cart.forEach((item: CartProduct) => {
    total += item.product.price * item.quantity;
  });

  return total;
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;
