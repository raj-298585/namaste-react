import React from 'react';
import { IMG_FETCH_URL } from '../utils/constants';

const Restaurant = (props) => {

    return (
        <div className='w-2/12'>
            <img src={IMG_FETCH_URL+'/'+props.data.cloudinaryImageId}></img>
            <h2 className='text-2xl text-left font-bold'>{props.data.name}</h2>
            <div className='font-sans text-justify'>{props.data.address}</div>
            <p>{props.data.veg}</p>
            <h3 className='font-bold'>{props.data.avgRating}</h3>
        </div>
    );
}

export default Restaurant;