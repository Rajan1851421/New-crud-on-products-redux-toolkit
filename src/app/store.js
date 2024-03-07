import { configureStore } from "@reduxjs/toolkit";
import pruductDetails from '../features/productSlice'


export const store = configureStore({
    reducer: {
       app:pruductDetails
    },
})