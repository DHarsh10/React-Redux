import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "authentication",
    initialState: {isLoggedin: false},
    reducers: {
        login: (state) => {
            state.isLoggedin = true;
        },

        logout: (state) => {
            state.isLoggedin = false;
        }
    }
})

export const authActions = auth.actions;


export default auth;