import {createSlice} from "@reduxjs/toolkit";


const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    },
})

export const shopCartActions = shopCartSlice.actions;
export const shopCartReducer = shopCartSlice.reducer;