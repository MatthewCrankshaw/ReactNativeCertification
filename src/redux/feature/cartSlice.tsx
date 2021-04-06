import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    cart: [
        {
            item: 'item 1', 
            price: 10,
            quantity: 1
        }
    ]
};

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

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;