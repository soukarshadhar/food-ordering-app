import React from "react";
import { useParams } from 'react-router-dom';
import useGetRestaurantById from "../../hooks/useGetRestaurantById";
import { CDN_URL } from "../../utils/constants";

const Restaurant = () => {
  const { id } = useParams();
  const { menu, info, loading } = useGetRestaurantById(id);

  if (loading) return <div>Loading...</div>;

  const {
    name = "",
    areaName = "",
    city = "",
    cuisines = [], 
    costForTwoMessage = "",
    cloudinaryImageId = "",
    avgRating = 0,
    locality = "",
    totalRatingsString = ""
  } = info;

  return (
    <>
      <div className="relative bg-gradient-to-r from-white from-25% to-transparent to-75% h-[160px]">
        <img className="absolute h-full object-cover object-center w-full -z-10 rounded-xl" src={CDN_URL + cloudinaryImageId} />
        <div className="absolute top-0">
          <div className="text-2xl font-bold">{name}</div>
          <div className="font-bold mb-2">{locality}, {areaName}, {city}</div>
          <div>{cuisines.join(', ')}</div>
          <div>{costForTwoMessage}</div>
          <div>
            <svg className="inline align-middle mr-1 fill-sky-600" width="16" height="20">
              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
            </svg>
            <span className="align-middle mr-1">{avgRating}</span>
          </div>
          <div>{totalRatingsString}</div>
        </div>
      </div>
      <div className="italic mt-5">Menu</div>
      <ul className="list-disc list-inside">
        {
          menu.map((i) => {
            return <li key={i.card.info.id}>{i.card.info.name} -  ₹{(i.card.info.defaultPrice || i.card.info.price)/100}</li>
          })
        }
      </ul>
    </>
  );
}

export default Restaurant;