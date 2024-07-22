import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';
import Footer from '../components/Footer';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setReservations(response.data);
    };
    fetchReservations();
  }, []);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <Header />
      <ReservationForm addReservation={addReservation} />
      <ReservationList reservations={reservations} />
      <Footer />
    </div>
  );
};

export default Reservations;
