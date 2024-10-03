
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
import './Navbar.css'; // Import the CSS file

function Navbar({ handleLogout }) {
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <div className="heading">Youth Supportive Society</div>
      </div>

      <div className="navbar-links">
        <NavLink to='/app/society/adminpanel' className="nav-link">Admin Panel</NavLink>
        <NavLink to='/app/society/dashboard' className="nav-link">Dashboard</NavLink>
        <NavLink to='/app/society/about' className="nav-link">About</NavLink>
        <NavLink to='/app/society/contact' className="nav-link">Contact</NavLink>
        <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
