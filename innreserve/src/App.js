import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import './styles.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/bookingform" element={<BookingForm />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
