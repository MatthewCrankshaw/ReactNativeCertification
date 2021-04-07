import {createSelector, createSlice} from '@reduxjs/toolkit';

type product = {
  id: number;
  name: string;
  price: number;
};

const initialState: product[] = [
  {
    id: 0,
    name: 'MacBook Pro',
    price: 6969.69,
  },
  {
    id: 1,
    name: 'MacBook Air',
    price: 1200.0,
  },
  {
    id: 2,
    name: 'IPhone 12',
    price: 1024.0,
  },
  {
    id: 3,
    name: 'IPhone XR',
    price: 512.0,
  },
  {
    id: 4,
    name: 'ICar',
    price: 159999.0,
  },
];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

const allProductsSelector = (state: product[]) => state.product;

export const selectAllProducts = createSelector(
  allProductsSelector,
  (items: product[]) => items,
);

export default productSlice.reducer;
