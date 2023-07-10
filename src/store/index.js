import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authentication";
import cartSlice from "./reducers/cartSlice";


const store = configureStore({
    reducer: {
        auth: auth.reducer,
        cartSlice: cartSlice.reducer
    }
})


export default store;