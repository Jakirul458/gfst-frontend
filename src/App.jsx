

// import React from 'react'
// import Navbar from './components/Navbar'
// import SideBar from './components/SideBar'
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <h1><center><b>Golden Future Supportive Trust</b></center></h1>
  
//       <div >
//         <Navbar />
//         <SideBar />
//       </div>
//     </>
//   )
// }

// export default App






/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
// import './App.css';
import './style.css';

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

*/
import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Logo from './logo.svg';

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
        <div className="main-content">
          <SideBar />
          {/* Main content goes here */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <div className="background"></div>
        <div className="card">
          <img className="logo" src="logo.svg " alt="Logo" />
          <h2>Welcome</h2>

          <form className="form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>

          <footer>
            Need an account? Sign up <a href="#">here</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;










