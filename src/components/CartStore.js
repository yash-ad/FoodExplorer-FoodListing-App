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
{cartItems.length === 0 ? <EmptyCart/> :
<CartList items={cartItems}/>}
 <div className="total-price-quantity">
  
 </div>
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