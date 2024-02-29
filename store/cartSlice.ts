import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { v4 as uuidv4 } from "uuid";
import { CartItem, CartState, Product } from "@/types/supabase";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          ...action.payload,
          cartItemId: uuidv4(),
          quantity: 1,
        };
        state.cart.push(newItem);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
