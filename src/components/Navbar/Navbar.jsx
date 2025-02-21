
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS file


// function Navbar({ handleLogout }) {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-brand">
//         <div className="heading">Youth Supportive Society</div>
//       </div>

//       <div className="navbar-links">
//        <NavLink to='/app/society/adminpanel' className="nav-link">Admin Panel</NavLink>
//         <NavLink to='/app/society/dashboard' className="nav-link">Dashboard</NavLink>
//         <NavLink to='/app/society/about' className="nav-link">About</NavLink>
//         <NavLink to='/app/society/contact' className="nav-link">Contact</NavLink>
//         <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from 'react'; 
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; 

// function Navbar({ handleLogout }) {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-brand">
//         <div className="heading">Youth Supportive Society</div>
//       </div>

//       <div className="navbar-links">
//         <NavLink to='/app/society/adminpanel' className="nav-link">Admin Panel</NavLink>
//         <NavLink to='/app/society/dashboard' className="nav-link">Dashboard</NavLink>
//         <NavLink to='/app/society/about' className="nav-link">About</NavLink>
//         <NavLink to='/app/society/contact' className="nav-link">Contact</NavLink>
//         <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faTachometerAlt, faInfoCircle, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 
import './Navbar.css'; 
import logo from '../../assets/icons/logo.svg';

function Navbar({ handleLogout }) {
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <img src={logo} alt="GFST Logo" className="navbar-logo" />
        <div className="heading">Golden Future Supportive Trust</div>
      </div>

      <div className="navbar-links">
        <NavLink to='/app/society/adminpanel' className="nav-link">
          <FontAwesomeIcon icon={faUserShield} /> Admin Panel
        </NavLink>
        <NavLink to='/app/society/dashboard' className="nav-link">
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </NavLink>
        <NavLink to='/app/society/about' className="nav-link">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </NavLink>
        <NavLink to='/app/society/contact' className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </NavLink>
        <button onClick={handleLogout} className="nav-link logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
