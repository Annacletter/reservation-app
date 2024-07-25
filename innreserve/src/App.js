import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import './styles.css';
import Contact from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/Booking" element={<BookingForm />} />
      <Route path="/contact" element={<Contact />} />
	<Route path="/About" element={<About />} />
    </Routes>
  </Router>
);

export default App;
