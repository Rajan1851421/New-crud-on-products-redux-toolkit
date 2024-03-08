import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async (search, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products${search}`)
        return response.data.products;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const searchProduct = createAsyncThunk('searchProduct',async(search,{rejectWithValue})=>{
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${search}`)
        return response.data.products
    } catch (error) {
        return rejectWithValue(error)
    }
})



export const pruductDetails = createSlice({
    name: 'productdetails',
    initialState: {
        products: [],        
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>
     {
            builder
            // handle fetch product
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                console.log(action.payload);
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // search product by name
            .addCase(searchProduct.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(searchProduct.fulfilled,(state,action)=>{
                state.products=action.payload;
            })
            .addCase(searchProduct.rejected,(state,action)=>{
                state.loading=false
                state.error = "Please Try Again";
            })

           
            
            


    },
})
export default pruductDetails.reducer;