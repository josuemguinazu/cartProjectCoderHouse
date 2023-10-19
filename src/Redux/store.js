import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/Cart/cartSlice';
import { productsSlice } from './slices/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
