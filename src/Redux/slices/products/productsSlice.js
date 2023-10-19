import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    allProducts: [],
    activeProduct: {},
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setAllProducts: (state, action) => {
      console.log('action:', action);
      state.isLoading = false;
    },
    setActiveProduct: (state, action) => {},
  },
});

export const { setIsLoading, setAllProducts, setActiveProduct } = productsSlice.actions;
