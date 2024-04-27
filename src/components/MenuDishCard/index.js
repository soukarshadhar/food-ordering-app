import React from "react";
import StarIcon from "../../../assets/star.svg";

const MenuDishCard = ({ name, price, rating, description, imageUrl, onAddDish = () => {} }) => {
  return (
    <div className="flex justify-between">
      <div className="pr-6">
        <div className="font-bold text-lg">{name}</div>
        <div>₹{price}</div>
        {rating && (
          <div className="mt-2.5">
            <img className="h-5 inline mr-1" src={StarIcon} alt="star" />
            <span className="align-middle">{rating}</span>
          </div>)
        }
        {description && <p className="font-extralight mb-1">{description}</p>}
      </div>
      {imageUrl && (
        <div className="min-w-[156px] min-h-[172px] relative">
          <img className="rounded-xl shadow-md object-cover aspect-square w-[156px]" src={imageUrl} alt="dish" />
          <div className="uppercase absolute w-28 h-8 cursor-pointer bg-white text-center shadow-md text-orange-600 font-bold rounded-lg left-1/2 -translate-x-1/2 top-[140px] leading-8" onClick={onAddDish}>
            Add
          </div>
        </div>)
      }
      {!imageUrl && (
          <div className="uppercase w-28 h-8 ml-12 mr-6 cursor-pointer bg-white shadow-md text-orange-600 text-center font-bold leading-8 rounded-lg" onClick={onAddDish}>>
            Add
          </div>
        )
      }
    </div>
  );
};

export default MenuDishCard;