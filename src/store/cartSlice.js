import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = state.cart.find((item) => item.id === action.payload.id);

      if (!product) {
        state.cart.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
        });
      } else {
        product.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      product.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        product.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
