import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"
 
 //Create our own store:-
 const appStore = configureStore({

    //Its our app reducer , whole big reducer.
reducer:{

    //Each slice have its own reducer.
cart:cartReducer,

},
 });



 export default appStore;