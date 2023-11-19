import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../Components/UI/Slice/authentificationSlice";

export const store = configureStore ({
    reducer: {
        authentication: authenticationReducer
    }
})

console.log(store.replaceReducer)