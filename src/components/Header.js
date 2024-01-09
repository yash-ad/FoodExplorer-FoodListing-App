// Importing necessary dependencies and configuration
import { LOGO_URL } from "../utilities/config";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";


// Defining the Header component
const Header = () => {
  // Using the useState hook to manage the state of the toggle button
  const [toggleButton, setToggleButton] = useState('Login');

  //Introduced `useContext` hook:-
// const data = useContext(UserContext);
const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser);


//Introduced `useSelector` hook to subscribing to the store using Selector.
const cartItems = useSelector((store)=> store.cart.items)
// after executing this line of code, cartItems will hold the value of store.cart.items, and it will automatically re-render the component whenever the items property in the cart slice changes.
// console.log(cartItems);


  return (
    // JSX representing the structure of the Header component
    <div className="header shadow-lg">
      <div className="logo-container">
        {/* Linking the logo to the home page */}
        <Link to="/">
          <img className="logo" alt="foodapplogo" src={LOGO_URL} />
        </Link>
      </div>

 

      <div className="nav-items">
        <ul>
          {/* Navigation links using the Link component from React Router */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link className="cart" to="/cart">
          <h2>
          Cart  
 <i class="ri-shopping-cart-2-fill"></i>
          <span>
          { cartItems.length }
          </span>
          </h2>
          </Link>
          </li>

          <li ><Link className="user" to="/user">
          <i class="ri-user-3-fill"></i>
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 448 512"><path fill="#5a5d6c" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> */}
          <span className="user-text">{loggedInUser}</span>
          </Link>
          </li>

          {/* Toggle button for login/logout functionality */}
          <button
            className="toggleBtn"
            onClick={() => {
              // Toggling the button text between 'Login' and 'Logout'
              toggleButton === 'Login' ?
                setToggleButton('Logout') : setToggleButton('Login')
            }}
          >
            {toggleButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

// Exporting the Header component to make it available for other parts of the application
export default Header;
