import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantById from "../../hooks/useGetRestaurantById";
import { CDN_URL, DISH_CDN_URL } from "../../utils/constants";
import { Accordion } from "../Accordion";
import MenuDishCard from "../MenuDishCard";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";
import starIcon from "../../../assets/star.svg";

const RestaurantPage = () => {
  const { id } = useParams();
  const [accordionIndex, setAccordionIndex] = useState(0);
  const { menu, info, loading } = useGetRestaurantById(id);
  const dispatch = useDispatch();

  if (loading) return <div>Loading...</div>;

  const renderDishes = (list) => {
    return list.map((dish, index) => {
      const { id, name, defaultPrice, price, imageId, description, ratings } =
        dish?.card?.info || {};
      return (
        <>
          {index !== 0 && <div className="border-t border-slate-300 my-10" />}
          <MenuDishCard
            key={id}
            name={name}
            price={((defaultPrice || price) / 100).toFixed(2)}
            description={description}
            imageUrl={imageId ? `${DISH_CDN_URL}${imageId}` : ""}
            rating={ratings.aggregatedRating.rating}
            onAddDish={() => dispatch(addCartItem(dish))}
          />
        </>
      );
    });
  };

  const {
    name = "",
    areaName = "",
    city = "",
    cuisines = [],
    costForTwoMessage = "",
    cloudinaryImageId = "",
    avgRating = 0,
    locality = "",
    totalRatingsString = "",
  } = info;

  return (
    <>
      <div className="relative bg-gradient-to-r mb-7 from-white from-25% to-transparent to-75% h-[160px]">
        <img
          className="absolute h-full object-cover object-center w-full -z-10 rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute top-0">
          <div className="text-2xl font-bold">{name}</div>
          <div className="font-bold mb-2">
            {locality}, {areaName}, {city}
          </div>
          <div>{cuisines.join(", ")}</div>
          <div>{costForTwoMessage}</div>
          <div className="flex">
            <img className="h-5 mr-1" src={starIcon} alt="star" />
            <span className="align-middle">{avgRating}</span>
            <span className="mx-1">•</span>
            <span className="align-middle">{totalRatingsString}</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        {menu.map((item, index) => {
          const { title, itemCards } = item?.card?.card || {};
          const content = renderDishes(itemCards);

          return (
            <Accordion
              key={index}
              title={`${title} (${itemCards.length})`}
              content={content}
              className={index !== 0 ? "mt-5" : ""}
              canExpand={accordionIndex === index}
              onAccordionClick={() => {
                if (accordionIndex !== index) {
                  setAccordionIndex(index);
                } else {
                  setAccordionIndex(-1);
                }
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantPage;
