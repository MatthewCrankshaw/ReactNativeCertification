import {createSelector, createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types/types';

const initialState: Product[] = [
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
  {
    id: 5,
    name: 'IPad Pro',
    price: 159999.0,
  },
  {
    id: 6,
    name: 'IPad 6 Gen',
    price: 159999.0,
  },
  {
    id: 7,
    name: 'IPad Air',
    price: 159999.0,
  },
  {
    id: 8,
    name: 'IPhone 12 Case',
    price: 32.0,
  },
  {
    id: 9,
    name: 'IPad Pro Case',
    price: 50.0,
  },
  {
    id: 10,
    name: 'IPad Keyboard',
    price: 50.0,
  },
  {
    id: 11,
    name: 'Ipad Pen',
    price: 120.0,
  },
  {
    id: 12,
    name: 'Macbook Charger',
    price: 90.0,
  },
];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

const allProductsSelector = (state: any) => state.product;

export const selectAllProducts = createSelector(
  allProductsSelector,
  (items: Product[]) => items,
);

export default productSlice.reducer;
