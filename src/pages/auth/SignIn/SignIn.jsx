
// import React, { useState } from 'react'
// import Logo from '../../../assets/icons/logo.svg'
// import api from '../../../api';
// import './SignIn.css'
// import { useStore } from '../../../store';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {

//   const navigate = useNavigate()

//     const isAuthenticated = useStore(state => state.isAuthenticated)
//     const setIsAuthenticated = useStore(state => state.isAuthenticated)
    
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//   return (
//     <div className="login-container">
//     <div className="background"></div>
//     <div className="card">
//       <img className="logo" src={Logo} alt="Logo" />
//       <h2>Welcome🫡</h2>
//       <h3>Youth Supportive Society</h3>
//       <br />
//       <form className="form" onSubmit={verifyAdmin}>
//         <input
//           type="text"
//           placeholder="Enter Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {
//           isLoading? <div>Loading ...</div> : (
//             <button type="submit">Sign In</button>
//           )
//         }
        
//       </form>
//       <footer>
//         Forget User ID & Password <a href="#" onClick={handleSendCredentials}>Click me</a><br /><br />
//         Need an account? Sign up <a href="#">here</a>
//       </footer>
//     </div>
//   </div>
//   )

//   async function handleSendCredentials() {
//     try {
//       // const response = await fetch('http://localhost:3001/send-email', {
//         const response = await api.fetch('api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       alert('Credentials sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send credentials.');
//     }
//   };

//   async function verifyAdmin(e) {
//     e.preventDefault()
//     setIsLoading(true);
    
//     const res = await api.post("/api/admin/login", {
//       username : username,
//       password : password
//     })

//     if(res.data.success){
//       // setIsAuthenticated(true);
//       navigate('/app/society/dashboard')
//     }else {
//       // setIsAuthenticated(false);
//       alert('Invalid Username & Password');
//     }
//     setIsLoading(false);
//   }
// }

// export default SignIn








import React, { useState } from "react";
import Logo from "../../../assets/icons/logo.svg";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("consumer"); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = (type) => {
    setLoginType(type);
    setUsername("");
    setPassword("");
  };

  async function verifyUser(e) {
    e.preventDefault();
    setIsLoading(true);

    if (loginType === "central") {
      return verifyAdmin(e);
    }

    let endpoint = "";
    let redirectPath = "";

    if (loginType === "branch") {
      endpoint = "/api/branch/login";
      redirectPath = "/app/society/dashboard";
    } else if (loginType === "consumer") {
      endpoint = "/api/consumer/login";
      redirectPath = "/app/consumer/dashboard";
    }

    try {
      const res = await api.post(endpoint, { username, password });

      if (res.data.success) {
        navigate(redirectPath);
      } else {
        alert("Invalid Username & Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error. Please try again later.");
    }
    setIsLoading(false);
  }

  async function verifyAdmin(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await api.post("/api/admin/login", {
        username: username,
        password: password
      });

      if (res.data.success) {
        navigate("/app/society/dashboard");
      } else {
        alert("Invalid Username & Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error. Please try again later.");
    }
    setIsLoading(false);
  }

  return (
    <div className="login-container">
      <div className="background-overlay"></div>

      {/* Toggle Buttons */}
      <div className="switch-buttons">
        <button
          className={loginType === "consumer" ? "active" : ""}
          onClick={() => handleToggle("consumer")}
        >
          Consumer
        </button>
        <button
          className={loginType === "branch" ? "active" : ""}
          onClick={() => handleToggle("branch")}
        >
          Branch
        </button>
        <button
          className={loginType === "central" ? "active" : ""}
          onClick={() => handleToggle("central")}
        >
          Central
        </button>
      </div>

      {/* Login Form */}
      <div className={`card ${loginType}`}>
        <img className="logo" src={Logo} alt="Logo" />
        <h2>Welcome, {loginType.charAt(0).toUpperCase() + loginType.slice(1)}!</h2>
        <h3>Golden Future Supportive Trust</h3>
        <br />
        <form className="form" onSubmit={verifyUser}>
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
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <button type="submit">Sign In</button>
          )}
        </form>

        {/* Links for Consumer & Branch */}
        {(loginType === "consumer" || loginType === "branch") && (
          <div className="extra-links">
            <a href={`/forgot-password?type=${loginType}`}>Forget ID & Password?</a>
            <a href={`/signup?type=${loginType}`}>Sign Up</a>
          </div>
        )}

        {/* Link for Central */}
        {loginType === "central" && (
          <div className="extra-links">
            <a href={`/forgot-password?type=central`}>Forget ID & Password?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
