
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS file

// function Navbar() {
//   return (
//     <>
//       <div className="navbar-container">
//         <div className="navbar-brand">
//           <div className="heading">Golden Future Supportive Trust</div>
//         </div>

//         <div className="navbar-links">
//           <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
//           <NavLink to='/about' className="nav-link">About</NavLink>
//           <NavLink to='/login' className="nav-link">Log In</NavLink>
//           <NavLink to='/logout' className="nav-link">Logout</NavLink>
        
          
//         </div>
//       </div>
//     </>
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
        <div className="heading">Golden Future Supportive Trust</div>
      </div>

      <div className="navbar-links">
        <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
        <NavLink to='/about' className="nav-link">About</NavLink>
        <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;


