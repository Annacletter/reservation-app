import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/booking-form" element={<BookingForm />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
