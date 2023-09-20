import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store-slices/cartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartSlice,
    }
});

export default appStore;