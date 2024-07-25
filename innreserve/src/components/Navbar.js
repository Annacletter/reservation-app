import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="brand">
                    <div className="app_navbar-right">
                        <li><Link to="/">Home</Link></li>
	                <Link className="nav-link" to="/Booking">Booking</Link>
	    		<Link className="nav-link" to="/about">about</Link>
	    		<Link className="nav-link" to="/contact">contact</Link>
	                </div>
	    </div>
            </nav>
        </div>
    );
}

export default Navbar;
