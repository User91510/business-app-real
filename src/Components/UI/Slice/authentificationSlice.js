import {createSlice} from "@reduxjs/toolkit";

const initialState = { userAuthenticated: false};

export const authenticationSlice = createSlice({
name:"authentication",
initialState: initialState,
reducers: {
    userLogIn: (state) => {
        state.initialState = true;
    },
    userLogOut: (state) => {
        state.initialState = false;
    },
}
})

export const {userLogIn, userLogOut} = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
