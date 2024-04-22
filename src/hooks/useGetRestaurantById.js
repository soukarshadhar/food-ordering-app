import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL, CORS_PROXY_URL } from "../utils/constants";

const useGetRestaurantById = (id) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [info, setInfo] = useState({});

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
    setInfo(resInfo);
    if (list) setMenu(list);
    setLoading(false);
  }

  return {
    info,
    menu,
    loading
  }
}

export default useGetRestaurantById;