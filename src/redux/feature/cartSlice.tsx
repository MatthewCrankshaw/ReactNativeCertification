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
            state.push(action.payload);
        },
        remove(state: any, action: any) {
            state.pop();
        }
    }
});

const selectCartEntities = (state: any) => state;

export const selectCartItems = createSelector(selectCartEntities, (state) => {
    return state.cart;
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;