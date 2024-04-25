import React from "react";
import { starIcon } from "../../utils/constants";

const MenuDishCard = ({ name, price, rating, description, imageUrl }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="font-bold text-lg">{name}</div>
        <div className="mb-2.5">₹{price}</div>
        {rating ? <div className="mb-1">{starIcon}<span className="align-middle">{rating}</span></div> : null}
        <p className="font-extralight">{description}</p>
      </div>
      {imageUrl ? <img className="w-40 h-36 rounded-xl ml-6 shadow-md" src={imageUrl} alt="dish" /> : null}
    </div>
  );
};

export default MenuDishCard;