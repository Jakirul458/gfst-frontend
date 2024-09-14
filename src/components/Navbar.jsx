
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


function Navbar({ handleLogout }) {
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <div className="heading">Youth Supportive Society</div>
      </div>

      <div className="navbar-links">
        <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
        <NavLink to='/about' className="nav-link">About</NavLink>
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
        <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;


