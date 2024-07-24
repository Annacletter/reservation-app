import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import './styles.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reservations/form" element={<ReservationForm />} />
      <Route path="/reservations/list" element={<ReservationList />} />
    </Routes>
  </Router>
);

export default App;
