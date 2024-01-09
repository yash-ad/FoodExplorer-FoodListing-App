import { useDispatch } from "react-redux";
import { IMG_URL } from "../utilities/config";
import { addItem } from "../utilities/cartSlice";

const ItemsList = ({items})=>{
   

//Introduced `useDispatch` hook for dispatching an actions.
//It uses dispatch function,`useDispatch` hook from react-redux to send an action to the Redux store here the store on our app is `appsStore`.
  const dispatch = useDispatch();


//This is a designated callback function called `handleAddItem()`
const handleAddItem = (item)=>{
  console.log('Before dispatch:', items); // Log the state before dispatch
//Inside `handleAddItem` function, the action `addItem` is dispatched.
//The `addItem` action is a part of your Redux slice  which means in our app is `cartSlice` and we have exported the action from `cartSlice.actions` and it is designed to add the item for the cart. 
// It dispatches an action which calls the `reducer` function called `addItem()` with the `item` parameter as a payload.
dispatch(addItem(item))
console.log('After dispatch:', items); 
};

    return(
<div>
    {/* Iterating over the restaurant categories of items list/array of objects using map() */}
            {items?.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-left">
                  <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                  <p className="font-semibold">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="menu-right">
                  <img src={IMG_URL + item.card.info.imageId} alt="Item" />
                  {/* //The `onClick` event will call a designated callback function when the button is clicked. */}
                  
                  
                  {/* Without Arrow Function:In this case, the handleAddItem function will be called when the button is clicked.  */}
                  {/* <button onClick={handleAddItem}  */}
                  
                  {/* //With Arrow Function (No Argument):Here, 
                   An arrow function is used to create an inline function that, when invoked, will call handleAddItem with the item argument. 
                   This is useful when you want to pass specific arguments to your event handler. */}
                 {/* //This `onClick={}` attribute specifies  the `handleAddItem` function that should be called , when the user clicks on an `ADD` Button. */}
                  <button onClick={()=> handleAddItem(item)} 

                  // <button onClick={handleAddItem(item)} 
                  //In this case, the handleAddItem function is not being used as an event handler for the onClick event. 
                  // Instead, it is being immediately invoked (called) when the component renders.
                  // This happens because of the parentheses () at the end of `handleAddItem(item)`. 
                  // This means that handleAddItem will be called with the argument item as soon as the component renders, not when the button is clicked.
                  // If you want to pass arguments to the handleAddItem function when the button is clicked, 
                  // you should use an arrow function or a function reference without invoking it immediately. 
    
                  id="addBtn"><span class="material-symbols-outlined">
add_shopping_cart
</span></button>
                </div>
              </div>
            ))}
  </div>
    );
};


export default ItemsList;