import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState: any = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state: any, action: any) {
      const updated = state.find((item: any) => {
        if (item.id == action.payload.id) {
          item.quantity++;
          return true;
        }
      });

      if (!updated) {
        state.push(action.payload);
      }
    },
    remove(state: any, action: any) {
      const index = state.findIndex((item: any) => {
        if (item.id == action.payload) {
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
  },
});

const selectCartEntities = (state: any) => state;

export const selectCartItems = createSelector(selectCartEntities, state => {
  return state.cart;
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;
