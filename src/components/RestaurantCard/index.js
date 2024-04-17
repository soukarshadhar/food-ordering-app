import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const {
    name = "",
    cloudinaryImageId = "",
    cuisines = [],
    avgRating = "",
    costForTwo = "",
    sla,
    id 
  } = restaurant?.info || {};
  
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="restaurant-card">
        <img
          className="res-image"
          alt="res"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
}

export default RestaurantCard