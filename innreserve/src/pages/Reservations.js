import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Ensure Header.js is also correctly imported
import BookingForm from '../components/BookingForm'; // Correct import
import Footer from '../components/Footer'; // Correct import

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <Header />
      <BookingForm addReservation={addReservation} reservations={reservations} />
      <Footer />
    </div>
  );
};

export default Reservations;
