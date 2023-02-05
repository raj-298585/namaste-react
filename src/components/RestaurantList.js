import React, { useContext } from "react";
import { restaurants } from "../utils/rest-data";
import Restaurant from "./Restaurant";
//import { ThemeContext } from "../App";

const RestaurantList = () => {
  //const theme = useContext(ThemeContext);
  //console.log(theme);
  return (
    <div className="flex gap-10 flex-wrap">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.data.id} data={restaurant.data} />
      ))}
    </div>
  );
};

export default RestaurantList;
