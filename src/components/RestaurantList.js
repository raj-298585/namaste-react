import React from 'react';
import { restaurants } from '../utils/rest-data';
import Restaurant from './Restaurant';


const RestaurantList = () => {
  return (
    <div className='flex gap-10 flex-wrap'>
      { restaurants.map((restaurant) => (<Restaurant key={restaurant.data.id} data={restaurant.data} />)) }
    </div>
  )
}

export default RestaurantList
