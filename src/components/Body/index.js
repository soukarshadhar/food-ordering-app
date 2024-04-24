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

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-4">
        <input className="border-black border-solid border-2 rounded-2xl" type="text" value={searchText} onChange={onChangeSearch} />
        <button className="bg-slate-300 p-2 rounded-2xl" onClick={handleOnFilterClick}>
          Rating 4.0+
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-5">
        {filteredList.length === 0 ? <Shimmer /> : filteredList.map((restaurant) =>
          <RestaurantCard
            restaurant={restaurant} 
            key={restaurant.info.id} 
            isOnline={isOnline} 
          />
        )}
      </div>
    </>
  );
}

export default Body;