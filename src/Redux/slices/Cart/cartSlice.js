import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    removeCartProduct: (state, { payload }) => {
      const productsRemove = state.cart.filter((prod) => prod.id !== payload.id);
      state.cart = productsRemove;
    },
    addCartProduct: (state, { payload }) => {
      let isInCart = state.cart.some((prod) => prod.id === payload.prod.id);
      if (isInCart) {
        let pos = state.cart.findIndex((idx) => idx.id === payload.prod.id);
        state.cart[pos].qty += payload.qty;
      } else {
        state.cart.push({ ...payload.prod, qty: payload.qty });
      }
    },
  },
});

export const { clearCart, removeCartProduct, addCartProduct } = cartSlice.actions;
