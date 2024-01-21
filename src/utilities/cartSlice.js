import { createSlice,current } from "@reduxjs/toolkit";

//Context of Redux slice:-

const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",

initialState:{
items:[]
},

reducers:{
addItem:(state,action)=>{
  const addToCart = action.payload;
    state.items.push(addToCart);
},

removeItem: (state, actions) => {
  const itemId = actions.payload;
  // console.log('Removing item with id:', itemId);
state.items.splice(state.items.indexOf(itemId),1);
  //  console.log('Updated state:', current(state.items));
},

clearCart:(state)=>{
  state.items.length = 0 //[for an empty array]
  },
},
});

export const{addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;

/// We can write in this way as well:-
// export const addItem = cartSlice.actions.addItem;
// export const clearCart = cartSlice.actions.clearCart;
// export const removeItem = cartSlice.actions.removeItem;
