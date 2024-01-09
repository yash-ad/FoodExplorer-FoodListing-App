// Component
import {useDispatch} from "react-redux"
import { IMG_URL } from "../utilities/config";
import { removeItem } from "../utilities/cartSlice";

const CartList = ({ items }) => {
  //It uses `dispatch` function , its a hook called `useDispatch()`from `react-redux` to send an action to the Redux store Here the store in our app is `appStore`.
const dispatch = useDispatch();

  // The function is defined called as `handleRemoveItem` is responsible for dispatching an action it calls a reducer function called `removeItem` with the `itemId` parameter as a payload. 
const handleRemoveItem = (itemId) => {
  console.log('Before dispatch:', items); // Log the state before dispatch
  dispatch(removeItem({ id: itemId }));
  console.log('After dispatch:', items); // Log the state after dispatch
};

  return (
    <div>
      <div>
        {items?.map((item) => (
          <div key={item.card.info.id} className="cart-menu">
            <div className="cart-menu-left">
              <h3 className="font-bold text-lg">{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <p className="cart-menu-price">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <div className="cart-menu-right">
              <img src={IMG_URL + item.card.info.imageId} alt="Item" />
            </div>
         <div className="cart-menu-crossButton">
         <div className="buttons">
                {/* This attribute  specifies the `handleRemoveItem` function that should be called when the button is clicked using `onClick` event handler */}
              {/*So, in this case we are using an arrow function within an event handler called `onClick` its an anonymous function that calls `handleRemoveItem` function and  passing `item.card.info.id` as an argument. */}
                <button onClick={()=> handleRemoveItem(item.card.info.id)}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#5a5d6c" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
                </button>
              </div>
         </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
