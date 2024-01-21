import { createSlice} from "@reduxjs/toolkit";

//Context of Redux slice:-

const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",

initialState:{
items:[]
},

reducers:{
addItem:(state,action)=>{
  const newItem = action.payload;
  const existingItem = state.items.find((item) => item.card.info.id === newItem.card.info.id);

  if (existingItem) {
    // If the item is already in the cart, update its quantity
    existingItem.quantity += 1;
  } else {
    // If the item is not in the cart, add it with quantity 1
    state.items.push({ ...newItem, quantity: 1 });
  }
},

removeItem: (state, action) => {
state.items.filter((item)=> item.id !== action.payload.id);
  //  console.log('Updated state:', current(state.items));
},
incrementQty: (state, action) => {
  state.cart = state.cart.map((item) =>
    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
  );
},
decrementQty: (state, action) => {
  state.cart = state.cart.map((item) =>
    item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
  );
},

clearCart:(state)=>{
  state.items.length = 0 //[for an empty array]
  },
},
});

export const{addItem,clearCart,removeItem,incrementQty,decrementQty} = cartSlice.actions;

export default cartSlice.reducer;

/// We can write in this way as well:-
// export const addItem = cartSlice.actions.addItem;
// export const clearCart = cartSlice.actions.clearCart;
// export const removeItem = cartSlice.actions.removeItem;
