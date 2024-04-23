import { useState, useEffect } from "react";
import { RESTAURANTS_URL, CORS_PROXY_URL } from "../utils/constants";

const useGetRestaurants = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(`${CORS_PROXY_URL}${RESTAURANTS_URL}`);
      const resData = await data.json();
      const resList = resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setList(resList);
    } catch(err) {
      setError(err);
    }
  };

  return { list, error };
}

export default useGetRestaurants;