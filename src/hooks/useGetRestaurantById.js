import { useEffect, useState } from "react";
import {
  RESTAURANT_MENU_URL,
  CORS_PROXY_URL,
  ITEM_CATEGORY,
} from "../utils/constants";

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
    const regularCards =
      response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const itemCategory = regularCards.filter(
      (i) => i.card.card["@type"] === ITEM_CATEGORY
    );
    const resInfo = response.data.cards[2].card.card.info;
    const list = itemCategory;
    setInfo(resInfo);
    if (list) setMenu(list);
    setLoading(false);
  };

  return {
    info,
    menu,
    loading,
  };
};

export default useGetRestaurantById;
