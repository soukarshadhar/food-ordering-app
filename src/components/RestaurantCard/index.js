import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurant, isOnline }) => {
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
    <div className="hover:scale-95">
      <img
        className="h-[150px] object-cover w-full rounded-2xl"
        alt="res"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <div className="mt-4 text-lg font-bold">{name}</div>
      <div className="font-bold text-base">
        <svg className="inline align-middle mr-1 fill-sky-600" width="16" height="20">
          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
        </svg>
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