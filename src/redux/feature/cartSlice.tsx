import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState: any = [
    {
        name: 'item 1', 
        price: 10,
        quantity: 1
    }
];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state: any, action: any) {
            state.cart.push(action.payload);
        },
        remove(state: any, action: any) {
            state.cart.pop();
        }
    }
});

const selectCartEntities = (state: any) => state.cart;

export const selectCartItems = createSelector(selectCartEntities, (items) => {
    Object.values(items);
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;