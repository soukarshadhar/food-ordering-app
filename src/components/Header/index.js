import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import Logo from "../../../assets/food_logo.png";
import CartIcon from "../../../assets/cart.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between content-center shadow-md fixed top-0 w-full z-10 bg-white">
      {
        isOnline ? <Link className="ml-7 my-2.5" to="/">
          <img className="h-[50px]" src={Logo} alt="logo" />
        </Link> : <img className="h-[50px] ml-7 my-2.5" src={Logo} alt="logo" />
      }
      <ul className="flex mr-7">
        <li className="content-center">
          {isOnline ? <Link to="/about">About Us</Link> : 'About Us'}
        </li>
        <li className="ml-4 content-center">
          <Link className="relative" to="/checkout">
            <span className="absolute -right-1.5 text-white bg-orange-700 font-semibold w-5 text-sm -top-2.5 rounded-full text-center">
              {cartItems.length}
            </span>
            <img className="h-6 cursor-pointer" src={CartIcon} alt="cart" />
          </Link>
        </li>
        <li className="ml-4 content-center">
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;