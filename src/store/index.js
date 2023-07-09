import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authentication";


const store = configureStore({
    reducer: {
        auth: auth.reducer
    }
})


export default store;