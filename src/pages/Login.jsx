// import React from 'react'

// function Login() {
//   return (
//     <div>Login</div>


    
//   )
// }

// export default Login







// import React, { useState } from 'react';

// const Login = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userId === 'admin' && password === 'admin') {
//       setError(null);
//       // Handle successful login
//     } else {
//       setError('Invalid user ID or password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <p>{error}</p>}
//       <label>
//         User ID:
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import './Login.css'

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Replace these credentials with your actual logic
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  return (
    <div className="login">
      <header className="log-header">
        <h1>Welcome to Golden Future Suppportive Trust</h1>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <input
            
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          </div>
        )}
      </header>
    </div>
  );
}

export default Login;





