import React from 'react';
import Header from '../components/Header';
import HotelImage from '../components/HotelImage';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <HotelImage type="hotel" />
    <HotelImage type="restaurant" />
    <Footer />
  </div>
);

export default Home;
