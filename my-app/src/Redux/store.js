import { configureStore } from "@reduxjs/toolkit";
import { funcSlice } from "./Slices/CustomFunctions";


export const store = configureStore ({
    reducer : {
        funcSlice,
    }
})
