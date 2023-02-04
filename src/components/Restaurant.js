import React from "react";
import { addItem } from "../utils/cartSlice";
import { IMG_FETCH_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const Restaurant = (props) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="w-2/12">
      <img src={IMG_FETCH_URL + "/" + props.data.cloudinaryImageId}></img>
      <h2 className="text-2xl text-left font-bold">{props.data.name}</h2>
      <div className="font-sans text-justify">{props.data.address}</div>
      <p>{props.data.veg}</p>
      <h3 className="font-bold">
        {props.data.avgRating}{" "}
        <button
          onClick={() => handleAdd(props.data.name)}
          className="p-1 m-2 float-right bg-green-200" >
          Add
        </button>
      </h3>
    </div>
  );
};

export default Restaurant;
