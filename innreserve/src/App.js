import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import './styles.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/reservations" component={Reservations} />
    </Switch>
  </Router>
);

export default App;
