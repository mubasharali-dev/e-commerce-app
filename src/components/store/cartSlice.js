import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, name, price, cover } = action.payload;
      const existingProduct = state.itemsList.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.itemsList.push({
          id,
          name,
          price,
          cover,
          quantity: 1,
          totalPrice: price,
          inCart: true, // set inCart to true when adding to cart
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.itemsList.find((item) => item.id === id);
      if (existingProduct.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
