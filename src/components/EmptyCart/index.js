import React from "react";
import CartEmptyIcon from "../../../assets/cart-empty.svg";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center">
      <img className="mx-auto h-72" src={CartEmptyIcon} alt="Cart-Empty" />
      <div className="font-bold text-xl mb-3">Add items to start a cart</div>
      <div className="mb-5">
        Once you add items from a restaurant, your cart will appear here.
      </div>
      <Link
        className="p-3 inline-block rounded-full bg-orange-700 text-white font-bold"
        to={"/"}
      >
        Start shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
