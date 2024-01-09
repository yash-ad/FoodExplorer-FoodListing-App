import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
import EmptyCart from "./EmptyCart";

const CartStore = ()=> {

//To read from the cart-store,We need to subscribing to the store. using Selector.
const cartItems = useSelector((store)=> store.cart.items);

const dispatch = useDispatch();

const handleClearCart = ()=>{
dispatch(clearCart());
}
return (
    <div className="cart-container">
    <div className="cart-items">

{/* The code is typically used in a React component to conditionally render different content based on the length of an array(cartItems) in this case */}
{/* The ternary operator (? :): It's a concise way to write an if-else statement in a single line. If the condition (the length of cartItems being 0) is true, the expression before the : is executed; otherwise, the expression after the : is executed. */}
{/* <EmptyCart/>: This is the JSX (JavaScript XML) syntax for rendering a React component called EmptyCart. If the condition is true (cart is empty), it renders the EmptyCart component. */}
{/* This is the JSX syntax for rendering a React component called CartList and passing the cartItems array as a prop named items. If the condition is false (cart is not empty), it renders the CartList component with the items from the cartItems array. */}
{/* This code is checking whether the `cartItems` array its empty or not,If it is empty it renders an `EmptyCart` component,otherwise it renders a `CartList` component with the items from the cartItems array, This is a common pattern in React for conditionally rendering components based on certain conditions. */}
{cartItems.length === 0 ? <EmptyCart/> :
<CartList items={cartItems}/>}

  {/* Conditionally render the "Clear Cart" button using ternary operator */}
{/* In this example, the ternary operator checks if cartItems.length > 0. If it is true, it renders the "Clear Cart" button; otherwise, it renders null. The null is equivalent to not rendering anything in React. */}
  {cartItems.length > 0 ? 
  <button className="clear-cart-button rounded" onClick={handleClearCart}>Clear Cart
<span id="trash-bin" class="material-symbols-outlined">delete
</span>
</button>
  : null
        }
    </div>
</div>
 )
};


export default CartStore;