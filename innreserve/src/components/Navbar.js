import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

const navbar= () =>{
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="app_navbar">
                <div className="brand">
                    <Link to="/">Starterkit</Link>
                </div>
                <div className="app_navbar-left">
                    <div class="search-box">
                        <button class="btn-search"><FaSearch /></button>
                        <input type="text" className="input-search" placeholder="Search..." required />
                    </div>
                </div>
                <div className="app_navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Booking">Booking</Link></li>
	            <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
            </Navbar>
        </div>
    );
}
export default navbar;
