import React from "react";
import { useParams } from 'react-router-dom';
import useGetRestaurantById from "../../hooks/useGetRestaurantById";

const Restaurant = () => {
  const { id } = useParams();
  const { menu, info, loading } = useGetRestaurantById(id);

  if (loading) return <h1>Loading...</h1>;

  const {
    name = "",
    areaName = "",
    city = "",
    cuisines = [], 
    costForTwoMessage = ""
  } = info;

  return (
    <>
      <h1>{name}</h1>
      <h2>{areaName}, {city}</h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwoMessage}</h4>
      <h5>Menu</h5>
      <ul>
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