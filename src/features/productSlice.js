import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching products
export const fetchProduct = createAsyncThunk("fetchProduct", async (search, { rejectWithValue }) => {
    try {
        // Check if search is defined and not empty before making the request
        const url = search ? `https://dummyjson.com/products${search}` : 'https://dummyjson.com/products';
        const response = await axios.get(url);
        return response.data.products;
    } catch (error) {
        // Return only the relevant error information
        return rejectWithValue(error.message);
    }
});

// Define the async thunk for login
export const loginFetch = createAsyncThunk("loginFetch", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        return response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Define the product slice
export const productDetails = createSlice({
    name: 'productdetails',
    initialState: {
        products: [],        
        Token_login: null,
        buy: [],
        cart: [],
        loading: false,
        error: null
    },
    reducers: {
        clearTokenLogin: (state) => {
            state.Token_login = null;
            console.log("Reducers:",state.Token_login);
        }
    },
    extraReducers: (builder) => {
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
            // handle loginFetch
            .addCase(loginFetch.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.Token_login = action.payload.token; // Assuming the login response is stored in state.login
            })
            .addCase(loginFetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearTokenLogin } = productDetails.actions; // Export the clearTokenLogin action creator
export default productDetails.reducer;
