import { configureStore } from "@reduxjs/toolkit";
import { LoginReducer } from "./features/LoginSlice";


let store=configureStore({
    reducer:{
        Login:LoginReducer
    }
})