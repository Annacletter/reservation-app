import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ addReservation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !date) {
      setError('All fields are required');
      return;
    }
    try {
      const newReservation = { name, email, date };
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newReservation);
      addReservation(response.data);
      setName('');
      setEmail('');
      setDate('');
      setError('');
    } catch (err) {
      setError('Error submitting reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      {error && <p className="error">{error}</p>}
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
