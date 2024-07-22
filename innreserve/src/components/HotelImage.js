import React from 'react';
import hotelImage from '../assets/hotel.jpg';
import restaurantImage from '../assets/restaurant.jpg';

const HotelImage = ({ type }) => {
  const image = type === 'hotel' ? hotelImage : restaurantImage;
  return <img src={image} alt={type} className="responsive-image" />;
};

export default HotelImage;
