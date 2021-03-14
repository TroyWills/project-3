import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddToCart: (state, action) => {
      state.push(action.payload);
    },
    UpdateQuantity: (state, action) => {
      const currentItem = getCurrentItem(state, action);
      if (currentItem.quantity === 1 && !action.payload.increment) {
        removeFromCart(state, currentItem.name);
      } else {
        action.payload.increment
          ? currentItem.quantity++
          : currentItem.quantity--;
      }
    },
    RemoveFromCart: (state, action) => {
      const currentItem = getCurrentItem(state, action);
      removeFromCart(state, currentItem.name);
    },
  },
});

export const getCurrentItem = (state, action) =>
  state.find((item) => item.name === action.payload.name);

export const removeFromCart = (state, name) => {
  const indexToRemove = state.findIndex((item) => item.name === name);
  state.splice(indexToRemove, 1);
};

export const getItemQuantity = (state, name) =>
  state.cart.find((item) => item.name === name)?.quantity ?? 0;

const { actions, reducer } = cartSlice;

export const { AddToCart, UpdateQuantity, RemoveFromCart } = actions;

export default reducer;