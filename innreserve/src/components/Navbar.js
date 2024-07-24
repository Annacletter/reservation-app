import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

const navbar= () =>{
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="brand">
                <div className="app_navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Booking">Booking</Link></li>
	            <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
	    </div>
            </Navbar>
        </div>
    );
}
export default navbar;
