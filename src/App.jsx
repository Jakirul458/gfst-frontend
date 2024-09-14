import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Logo from './logo.svg';
import api from './api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleSendCredentials = async () => {
    try {
      // const response = await fetch('http://localhost:3001/send-email', {
        const response = await api.fetch('api/send-email', {
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
          <h3>Youth Supportive Society</h3>
          <br />
          <form className="form" onSubmit={verifyAdmin}>
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
            {
              isLoading? <div>Loading ...</div> : (
                <button type="submit">Sign In</button>
              )
            }
            
          </form>
          <footer>
            Forget User ID & Password <a href="#" onClick={handleSendCredentials}>Click me</a><br /><br />
            Need an account? Sign up <a href="#">here</a>
          </footer>
        </div>
      </div>
    );
  }

  async function verifyAdmin(e) {
    e.preventDefault()
    setIsLoading(true);
    
    const res = await api.post("/api/admin/login", {
      username : username,
      password : password
    })

    if(res.data.success){
      setIsAuthenticated(true);
    }else {
      setIsAuthenticated(false);
      alert('Invalid Username & Password');
    }
    setIsLoading(false);
  }
  
}

export default App;










