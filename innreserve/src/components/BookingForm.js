import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();

  const handleHotelBooking = (event) => {
    event.preventDefault();
    navigate('https://www.kovecollection.co.za/stay/');
  };

  const handleRestaurantReservation = (event) => {
    event.preventDefault();
    navigate('https://www.kovecollection.co.za/eat-drinks/');
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Hotel Booking</h2>
          <form onSubmit={handleHotelBooking}>
            <div className="mb-3">
              <label htmlFor="hotelName" className="form-label">Name</label>
              <input type="text" className="form-control" id="hotelName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="hotelEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="hotelEmail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="checkInDate" className="form-label">Check-In Date</label>
              <input type="date" className="form-control" id="checkInDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="checkOutDate" className="form-label">Check-Out Date</label>
              <input type="date" className="form-control" id="checkOutDate" required />
            </div>
            <button type="submit" className="btn btn-primary">Book Now</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Restaurant Reservation</h2>
          <form onSubmit={handleRestaurantReservation}>
            <div className="mb-3">
              <label htmlFor="restaurantName" className="form-label">Name</label>
              <input type="text" className="form-control" id="restaurantName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="restaurantEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="restaurantEmail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
              <input type="date" className="form-control" id="reservationDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="reservationTime" className="form-label">Reservation Time</label>
              <input type="time" className="form-control" id="reservationTime" required />
            </div>
            <button type="submit" className="btn btn-primary">Reserve Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

