import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching products
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (search, { rejectWithValue }) => {
    try {
      const url = search
        ? `https://dummyjson.com/products${search}`
        : "https://dummyjson.com/products";
      const response = await axios.get(url);
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Define the async thunk for login
export const loginFetch = createAsyncThunk(
  "loginFetch",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addToCart = createAsyncThunk(
  "addToCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const buyNow = createAsyncThunk(
  "buyNow",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const selectAddress = createAsyncThunk(
  "selectAddress",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyapi.online/api/users`);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const selectedAddress = createAsyncThunk(
  "selectedAddress",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyapi.online/api/users/${id}`,
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeCartItem = createAsyncThunk(
  "removeCartItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Define the product slice
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    Token_login: null,
    loading: false,
    address: [],
    chosseAddress: [],
    error: null,
    cart: [], // Initialize cart state
    orders: [],
    status: null,
  },
  reducers: {
    clearTokenLogin: (state) => {
      state.Token_login = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.Token_login = action.payload.token;
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add to cart functionality
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload);
        state.status = "Item Added !!!!! ";
        console.log(state.cart.length);
      })

      .addCase(addToCart.rejected, (state) => {
        state.status = "Please Try Again";
      })

      // add buy now functionallity
      .addCase(buyNow.pending, (state) => {
        state.loading = true;
      })
      .addCase(buyNow.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(buyNow.rejected, (state) => {
        state.error = "Something Wrong Try Again";
      })

      // address select
      .addCase(selectAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
      })
      .addCase(selectAddress.rejected, (state) => {
        state.loading = false;
        state.status = "Please Try Again Later";
      })

      // selected address
      .addCase(selectedAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectedAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.chosseAddress = action.payload;
      })
      .addCase(selectedAddress.rejected, (state) => {
        state.loading = false;
        state.status = "Plaese try Agian later";
      })
      // remove cart item
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the item that matches the payload ID
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      })
      
      
      .addCase(removeCartItem.rejected, (state) => {
        state.loading = false;
        state.status="plaese try again later"
      });
  },
});

export const { clearTokenLogin } = productSlice.actions;

export default productSlice.reducer;
