import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
import EmptyCart from "./EmptyCart";

const CartStore = () => {
  // To read from the cart-store, We need to subscribe to the store using Selector.
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <CartList items={cartItems} />
            <div className="total-price-quantity">
              {/* Add content related to total price and quantity */}
            </div>
            <button className="clear-cart-button rounded" onClick={handleClearCart}>
              Clear Cart
              <span id="trash-bin" className="material-symbols-outlined">
                delete
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartStore;


