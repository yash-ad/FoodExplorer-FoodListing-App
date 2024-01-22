// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.card.info.id === newItem.card.info.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.card.info.id !== itemIdToRemove);
    },
    decrementQty: (state, action) => {
      const itemIdToDecrement = action.payload.id;
      const itemToDecrement = state.items.find((item) => item.card.info.id === itemIdToDecrement);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
    incrementQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    clearCart:(state)=>{
      state.items.length = 0 //[for an empty array]
      },
  },
});

export const { addItem, removeItem, decrementQty,clearCart,incrementQty } = cartSlice.actions;

export default cartSlice.reducer;



/// We can write in this way as well:-
// export const addItem = cartSlice.actions.addItem;
// export const clearCart = cartSlice.actions.clearCart;
// export const removeItem = cartSlice.actions.removeItem;
