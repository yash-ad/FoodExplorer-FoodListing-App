import { Link } from "react-router-dom";

const EmptyCart = ()=>{
return(
<div className="empty-cart-container">
<div className="empty-cart-image"></div>
<div class="empty-cart-status">Your cart is empty</div>
<div class="empty-cart-command">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
<Link to={"/"}><div class="empty-cart-button">Explore restaurants near you</div></Link>
</div>
)
}

export default EmptyCart;