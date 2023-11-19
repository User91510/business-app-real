import { configureStore } from "@reduxjs/toolkit";
// import { authenticationReducer } from "../Components/UI/Slice/authentificationSlice";
import { reportsApi } from "../api/ReportsApi";

export const store = configureStore ({
    reducer: {
        // authentication: authenticationReducer,
        [reportsApi.reducerPath]: reportsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(reportsApi.middleware)
})

