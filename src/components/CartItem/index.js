import React from "react";
import trashIcon from "../../../assets/trash.svg";

const CartItem = ({ imageUrl, name, price, onDeleteItem = () => {} }) => {
  return (
    <div data-testid="cart-item" className="flex gap-x-5 mt-4">
      <img
        className="w-[80px] aspect-square object-cover rounded-xl shadow"
        src={imageUrl}
        alt="menu-img"
      />
      <div className="w-full">{name}</div>
      <div className="min-w-[45px]">₹{price}</div>
      <img
        className="h-5 mt-0.5 cursor-pointer"
        src={trashIcon}
        alt="trash-icon"
        onClick={onDeleteItem}
      />
    </div>
  );
};

export default CartItem;
