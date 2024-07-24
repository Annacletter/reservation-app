 1 import React from 'react';
 2 import { Link } from 'react-router-dom';
 3 import "../styles.css";
 4 
 5 const Navbar = () => {
 6     return (
 7         <div>
 8             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 9                 <div className="brand">
10                     <div className="app_navbar-right">
11                         <li><Link to="/">Home</Link></li>
12                         <li><Link to="/Booking">Booking</Link></li>
13                         <li><Link to="/contact">Contact</Link></li>
14                         <li><Link to="/about">About</Link></li>
15                     </div>
16                 </div>
17             </nav>
18         </div>
19     );
20 }

21 export default Navbar;

