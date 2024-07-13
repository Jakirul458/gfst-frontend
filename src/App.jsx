/*

import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <h1><center><b>Golden Future Supportive Trust</b></center></h1>
  
      <div >
        <Navbar />
        <SideBar />
      </div>
    </>
  )
}

export default App

*/


// import React from 'react';
// import Navbar from './components/Navbar';
// import SideBar from './components/SideBar';
// // import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css';

// function App() {
//   return (
//     <div className="main-content">
//       <Navbar />
//       <SideBar />
      
//     </div>
//   );
// }
// export default App;








// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import SideBar from './components/SideBar';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Placeholder for actual authentication logic
//     if (username === 'admin' && password === 'admin') {
//       setIsAuthenticated(true);
//     } else {
//       alert('Please enter Username & Password');
//     }
//   };

//   if (isAuthenticated) {
//     return (
      
//         <div className="main-content">
//           <Navbar />
//           <SideBar />
//         </div>
      
//     );
//   } else {
//     return (
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Username</label>
//             <input
//               type="text"
//                 placeholder="Enter Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import SideBar from './components/SideBar';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Placeholder for actual authentication logic
//     if (username === 'admin' && password === 'admin') {
//       setIsAuthenticated(true);
//     } else {
//       alert('Please enter Username & Password');
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUsername('');
//     setPassword('');
//   };

//   if (isAuthenticated) {
//     return (
//       <div className="main-content">
//         <Navbar />
//         <SideBar />
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Username</label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Placeholder for actual authentication logic
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Please enter Username & Password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (isAuthenticated) {
    return (
      <div className="authenticated-container">
        <Navbar handleLogout={handleLogout} />
        <SideBar />
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default App;







