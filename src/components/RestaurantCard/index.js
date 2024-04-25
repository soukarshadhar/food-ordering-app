import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { CDN_URL, starIcon } from "../../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const isOnline = useOnlineStatus();

  const {
    name = "",
    cloudinaryImageId = "",
    cuisines = [],
    avgRating = "",
    costForTwo = "",
    sla,
    id,
    areaName 
  } = restaurant?.info || {};

  const cardLayout = (
    <div className="hover:scale-95 transition-all ease-in duration-75">
      <img
        className="h-[150px] object-cover w-full rounded-2xl shadow-md"
        alt="res"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <div className="mt-4 text-lg font-bold">{name}</div>
      <div className="font-bold text-base">
        {starIcon}
        <span className="align-middle mr-1">{avgRating}</span>
        <span className="align-middle mr-1">•</span>
        <span className="align-middle">{sla.slaString}</span>
      </div>
      <div className="font-light">{cuisines.join(', ')}</div>
      <div className="mt-px font-light">{costForTwo}</div>
      <div className="mt-px font-light">{areaName}</div>
      
    </div>
  );
  
  return (isOnline ?
    <Link to={`/restaurants/${id}`}>
     {cardLayout}
    </Link> : cardLayout
  );
}

export default RestaurantCard