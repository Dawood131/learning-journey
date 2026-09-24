import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        updateQuantity: (state, action) => {
           const item = state.items.find(i => i.id === action.payload.id)
           item.quantity = action.payload.quantity
        }
    }
})

export const {updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;