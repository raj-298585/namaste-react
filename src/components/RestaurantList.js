import React from 'react';
import { restaurants } from '../utils/rest-data';
import Restaurant from './Restaurant';


const RestaurantList = () => {
  return (
    <div className='grid-container'>
      { restaurants.map((restaurant) => (<div><Restaurant key={restaurant.data.id} data={restaurant.data} /></div>)) }
    </div>
  )
}

export default RestaurantList
