import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/food_logo.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex justify-between content-center shadow-md">
      <Link className="ml-7 my-2.5" to="/">
        <img className="h-[50px]" src={Logo} alt="logo" />
      </Link>
      <ul className="flex mr-7">
        <li className="content-center">
          <Link to="/about">About Us</Link>
        </li>
        <li className="ml-4 content-center">
          <Link to="/contact">Contact Us</Link>
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