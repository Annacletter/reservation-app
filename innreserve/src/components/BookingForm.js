import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [hotelName, setHotelName] = useState('');
  const [hotelEmail, setHotelEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [reservationName, setReservationName] = useState('');
  const [reservationEmail, setReservationEmail] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleHotelBooking = async (event) => {
    event.preventDefault();
    try {
      const newBooking = { name: hotelName, email: hotelEmail, checkInDate, checkOutDate };
      await axios.post('https://jsonplaceholder.typicode.com/posts', newBooking);
      setSuccessMessage('Hotel booking successfully submitted!');
      setError('');
    } catch (err) {
      setError('Error submitting hotel booking');
    }
  };

  const handleRestaurantReservation = async (event) => {
    event.preventDefault();
    try {
      const newReservation = { name: reservationName, email: reservationEmail, reservationDate, reservationTime };
      await axios.post('https://jsonplaceholder.typicode.com/posts', newReservation);
      setSuccessMessage('Restaurant reservation successfully submitted!');
      setError('');
    } catch (err) {
      setError('Error submitting restaurant reservation');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Hotel Booking</h2>
          <form onSubmit={handleHotelBooking}>
            <div className="mb-3">
              <label htmlFor="hotelName" className="form-label">Name</label>
              <input type="text" className="form-control" id="hotelName" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="hotelEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="hotelEmail" value={hotelEmail} onChange={(e) => setHotelEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="checkInDate" className="form-label">Check-In Date</label>
              <input type="date" className="form-control" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="checkOutDate" className="form-label">Check-Out Date</label>
              <input type="date" className="form-control" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Book Now</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Restaurant Reservation</h2>
          <form onSubmit={handleRestaurantReservation}>
            <div className="mb-3">
              <label htmlFor="restaurantName" className="form-label">Name</label>
              <input type="text" className="form-control" id="restaurantName" value={reservationName} onChange={(e) => setReservationName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="restaurantEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="restaurantEmail" value={reservationEmail} onChange={(e) => setReservationEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
              <input type="date" className="form-control" id="reservationDate" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="reservationTime" className="form-label">Reservation Time</label>
              <input type="time" className="form-control" id="reservationTime" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Reserve Now</button>
          </form>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
    </div>
  );
};

export default BookingForm;
