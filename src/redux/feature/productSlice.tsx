import {createSelector, createSlice} from '@reduxjs/toolkit';
import products from '../../../res/products';
import {Product} from '../../types/types';

const initialState: Product[] = products;

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
