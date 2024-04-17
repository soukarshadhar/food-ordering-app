import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import { RESTAURANTS_URL, CORS_PROXY_URL } from "../../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleOnFilterClick = () => {
    const list = restaurantList.filter((i) => i.info.avgRating > 4);
    setFilteredRestaurantList(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(`${CORS_PROXY_URL}${RESTAURANTS_URL}`);
      const resData = await data.json();
      const resList = resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(resList);
      setFilteredRestaurantList(resList);
    } catch(err) {
      console.log(err);
    }
  };

  const onChangeSearch = (e) => {
    const val = e.target.value;
    setSearchText(val);
    const filteredList = restaurantList.filter((item) => {
      return item.info.name.toLowerCase().includes(val.toLowerCase());
    });
    setFilteredRestaurantList(filteredList);
  };

  return filteredRestaurantList.length === 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={onChangeSearch} />
        <button className="rating-btn" onClick={handleOnFilterClick}>Rating 4.0+</button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) =>
          <RestaurantCard restaurant={restaurant} key={restaurant.info.id}/>
        )}
      </div>
    </div>;
}

export default Body;