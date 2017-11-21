import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
      <div>
        <div className="navbar-container">
          <div className = "dashboard-box">
            <div className = "dashboard-icon"></div>
            <Link to="/"className = "dashboard-text">DASHBOARD</Link>
            </div>
            <div className = "dashboard-box">
              <div className = "customer-icon"></div>
            <Link to="/customers" className = "dashboard-text">CUSTOMERS</Link>
            </div>
            <div className = "dashboard-box">
              <div className = "invoices-icon"></div>
            <Link to="/invoices" className = "dashboard-text">INVOICES</Link>
            </div>
            <div className = "dropdown-box">
              <div className = "invoices-icon"></div>
            <Link to="/invoices" className = "dashboard-text">INVOICES</Link>
            </div>
            <div className = "dashboard-box">
              <div className = "reports-icon"></div>
            <Link to="/reports" className = "dashboard-text">REPORTS</Link>
            </div>
        </div>
        <div className = "navbar-bottom">
          <div className = "messages-icon"></div>
          <Link to="/reports" className = "dashboard-text">MESSAGES</Link>
          </div>
      </div>
    )
}

export default Navbar;
