import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { RESTAURANT_MENU_URL, CORS_PROXY_URL } from "../../utils/constants";

const Restaurant = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${CORS_PROXY_URL}${RESTAURANT_MENU_URL}${id}`);
    const response = await data.json();
    const regularCards = response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const resInfo = response.data.cards[2].card.card.info;
    const recommendedMenu = regularCards.find((item) => item.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED");
    const list = recommendedMenu?.card?.card?.itemCards;
    setRestaurantInfo(resInfo);
    if (list) setMenu(list);
  }

  if (!restaurantInfo && menu.length === 0) return <h1>Loading...</h1>;

  const {name, areaName, city, cuisines, costForTwoMessage} = restaurantInfo;

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