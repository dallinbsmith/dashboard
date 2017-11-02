import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/"className = "home">DASHBOARD</Link>
            <Link to="/about" className = "resume">CUSTOMERS</Link>
            <Link to="/contact">REPORTS</Link>
            <Link to="/services">INVOICES</Link>
        </div>
    )
}

export default Navbar;
