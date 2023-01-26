import React from 'react';

const Restaurant = (props) => {

    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.veg}</p>
            <p>{props.data.avgRating}</p>
        </div>
    );
}

export default Restaurant;