import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import Logo from "../../../assets/food_logo.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnlineStatus();

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
          {isOnline ? <Link to="/contact">Contact Us</Link> : 'Contact Us'}
        </li>
        <li className="ml-4 content-center">Cart</li>
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