import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import useGetRestaurants from "../../hooks/useGetRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const isOnline = useOnlineStatus();
  const { list } = useGetRestaurants();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleOnFilterClick = (e) => {
    const listWithRatingsFourPlus = list.filter((i) => i.info.avgRating > 4);
    setFilteredList(listWithRatingsFourPlus);
  };

  const onChangeSearch = (e) => {
    const val = e.target.value;
    const filteredList = list.filter((item) => {
      return item.info.name.toLowerCase().includes(val.toLowerCase());
    });
    setSearchText(val);
    setFilteredList(filteredList);
  };

  return filteredList.length === 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={onChangeSearch} />
        <button className="rating-btn" onClick={handleOnFilterClick}>Rating 4.0+</button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) =>
          <RestaurantCard
            restaurant={restaurant} 
            key={restaurant.info.id} 
            isOnline={isOnline} 
          />
        )}
      </div>
    </div>;
}

export default Body;