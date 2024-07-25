import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import './styles.css';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/Booking" element={<BookingForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
