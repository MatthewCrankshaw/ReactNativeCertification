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

type cartItem = {
    item: string,
    price: number, 
    quantity: number
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        added(state: any, action: any) {
            state.cart.push(action.payload);
        },
        removed(state: any, action: any) {
            state.cart.pop();
        }
    }
});

export const { added, removed } = cartSlice.actions;

export default cartSlice.reducer;