import React from 'react';

const ReservationList = ({ reservations }) => (
  <ul>
    {reservations.map((reservation) => (
      <li key={reservation.id}>
        {reservation.name} - {reservation.email} - {reservation.date}
      </li>
    ))}
  </ul>
);

export default ReservationList;
