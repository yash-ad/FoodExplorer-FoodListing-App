import { createSlice,current } from "@reduxjs/toolkit";

//Context of Redux slice:-

const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",

initialState:{
items:[]
},

reducers:{
//Redux `addItem` reducer:-
//The `addItem` reducer is your Redux slice is responsible for handling this actions.
//It takes the current stata (state.items) and the actions as a parameters
addItem:(state,action)=>{
const addToCart = action.payload;
//It uses `push()` method in an array to add elements at the end of an array.When user clicks on the `ADD` button, items will be add into the cart.
state.items.push(addToCart);
//Mutating the state here , directly modifying the state.
//We have to mutate the state      [`Immer` library for immutable state]
//Redux-toolkit uses `Immer` Behind the scenes.
},

// Redux `removeItem` Reducer:-
//The `removeItem` reducer in your Redux slice is responsible for handling this action.
//It takes the current state (`state.items`) and the actions as parameters.
// Redux `removeItem` Reducer:-
removeItem: (state, action) => {
  const itemId = action.payload.id;
  console.log('Removing item with id:', itemId);
    const itemtoRemove = state.items.filter(item => item.id !== itemId);
console.log(`Removing item :`,itemtoRemove);
    state.items.splice(itemtoRemove,1)

   console.log('Updated state:', current(state.items));
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
