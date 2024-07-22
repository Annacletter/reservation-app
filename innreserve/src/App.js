import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import './styles.css';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/reservations" component={Reservations} />
    </Routes>
  </Router>
);

export default App;
