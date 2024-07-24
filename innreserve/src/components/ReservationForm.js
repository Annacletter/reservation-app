import React, { useState } from 'react';

const ReservationForm = ({ addReservation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !date) {
      setError('All fields are required');
      return;
    }
    try {
      const newReservation = { name, email, date };
      addReservation(newReservation); // Add the reservation locally
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
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
        required 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
