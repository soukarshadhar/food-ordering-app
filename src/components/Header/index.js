import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/food_logo.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <li>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;