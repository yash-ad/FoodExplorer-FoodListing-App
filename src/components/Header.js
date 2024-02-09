

import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilities/config";
import UserContext from "../utilities/UserContext";

const Header = () => {
  const [toggleButton] = useState('Login');
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const cartLength = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" alt="foodapplogo" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <Link className="cart" to="/cart">
              <h2>
                Cart  
                <i className="ri-shopping-cart-2-fill"></i>
                <span>({`${cartLength}`})</span>
              </h2>
            </Link>
          </li>

          <li className="user">
            <i className="ri-user-3-fill"></i>
            <span className="user-text">{loggedInUser}</span>
          </li>

          <li>
            <Link to="/user">
              <button className="toggleBtn">{toggleButton}</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
