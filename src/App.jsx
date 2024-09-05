

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

*/import React, { useState } from 'react';
// import './style.css';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
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
      alert('Invalid Username & Password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleSendCredentials = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Credentials sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send credentials.');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="authenticated-container">
        <Navbar handleLogout={handleLogout} />
        <div className="main-content">
          <SideBar />
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <div className="background"></div>
        <div className="card">
          <img className="logo" src={Logo} alt="Logo" />
          <h2>Welcome🫡</h2>

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
            Forget User ID & Password <a href="#" onClick={handleSendCredentials}>Click me</a><br /><br />
            Need an account? Sign up <a href="#">here</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;










