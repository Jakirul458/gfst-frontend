import React, { useState } from 'react'
import Logo from '../../../assets/icons/logo.svg'
import api from '../../../api';
import './SignIn.css'
import { useStore } from '../../../store';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate()

    const isAuthenticated = useStore(state => state.isAuthenticated)
    const setIsAuthenticated = useStore(state => state.isAuthenticated)
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
  )

  async function handleSendCredentials() {
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

  async function verifyAdmin(e) {
    e.preventDefault()
    setIsLoading(true);
    
    const res = await api.post("/api/admin/login", {
      username : username,
      password : password
    })

    if(res.data.success){
      // setIsAuthenticated(true);
      navigate('/app/savings/create')
    }else {
      // setIsAuthenticated(false);
      alert('Invalid Username & Password');
    }
    setIsLoading(false);
  }
}

export default SignIn
