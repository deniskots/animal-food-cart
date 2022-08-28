import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from '../redux/slices/cartSlice';
import {shopCartReducer} from "./slices/shopCartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shopCart: shopCartReducer
    }
})

export default store;