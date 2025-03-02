
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








// import React, { useState } from "react";
// import Logo from "../../../assets/icons/logo.svg";  
// import api from "../../../api";
// import { useNavigate } from "react-router-dom";
// import "./SignIn.css";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [loginType, setLoginType] = useState("consumer"); 
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleToggle = (type) => {
//     setLoginType(type);
//     setUsername("");
//     setPassword("");
//   };

//   async function verifyUser(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     if (loginType === "central") {
//       return verifyAdmin(e);
//     }

//     let endpoint = "";
//     let redirectPath = "";

//     if (loginType === "branch") {
//       endpoint = "/api/branch/login";
//       redirectPath = "/app/society/dashboard";
//     } else if (loginType === "consumer") {
//       endpoint = "/api/consumer/login";
//       redirectPath = "/app/consumer/dashboard";
//     }

//     try {
//       const res = await api.post(endpoint, { username, password });

//       if (res.data.success) {
//         navigate(redirectPath);
//       } else {
//         alert("Invalid Username & Password");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Server error. Please try again later.");
//     }
//     setIsLoading(false);
//   }

//   async function verifyAdmin(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const res = await api.post("/api/admin/login", {
//         username: username,
//         password: password
//       });

//       if (res.data.success) {
//         navigate("/app/society/dashboard");
//       } else {
//         alert("Invalid Username & Password");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Server error. Please try again later.");
//     }
//     setIsLoading(false);
//   }

//   return (
//     <div className="login-container">
//       <div className="background-overlay"></div>

//       {/* Toggle Buttons */}
//       <div className="switch-buttons">
//         <button
//           className={loginType === "consumer" ? "active" : ""}
//           onClick={() => handleToggle("consumer")}
//         >
//           Consumer
//         </button>
//         <button
//           className={loginType === "branch" ? "active" : ""}
//           onClick={() => handleToggle("branch")}
//         >
//           Branch
//         </button>
//         <button
//           className={loginType === "central" ? "active" : ""}
//           onClick={() => handleToggle("central")}
//         >
//           Central
//         </button>
//       </div>

//       {/* Login Form */}
//       <div className={`card ${loginType}`}>
//         <img className="logo" src={Logo} alt="Logo" />
//         <h2>Welcome, {loginType.charAt(0).toUpperCase() + loginType.slice(1)}!</h2>
//         <h3>Golden Future Supportive Trust</h3>
//         <br />
//         <form className="form" onSubmit={verifyUser}>
//           <input
//             type="text"
//             placeholder="Enter Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {isLoading ? (
//             <div className="loader"></div>
//           ) : (
//             <button type="submit">Sign In</button>
//           )}
//         </form>

//         {/* Links for Consumer & Branch */}
//         {(loginType === "consumer" || loginType === "branch") && (
//           <div className="extra-links">
//             <a href={`/forgot-password?type=${loginType}`}>Forget ID & Password?</a>
//             <a href={`/signup?type=${loginType}`}>Sign Up</a>
//           </div>
//         )}

//         {/* Link for Central */}
//         {loginType === "central" && (
//           <div className="extra-links">
//             <a href={`/forgot-password?type=central`}>Forget ID & Password?</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignIn;









//=================================================================//




// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import api from "../../../api";
// import Logo from "../../../assets/icons/logo.svg";
// import "./SignIn.css";
// import { toast } from "react-toastify";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [loginType, setLoginType] = useState("consumer");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [accountNo, setAccountNo] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleToggle = (type) => {
//     setLoginType(type);
//     setUsername("");
//     setPassword("");
//     setAccountNo("");
//     setError("");
//   };

//   const verifyAdmin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const res = await api.post("/api/admin/login", { username, password });
//       if (res.data.success) {
//         localStorage.setItem("userType", "admin");
//         localStorage.setItem("username", username);
//         toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
//         navigate("/app/society/adminpanel");
//       } else {
//         toast.error("Invalid Username & Password", { position: "top-center", autoClose: 3000 });
//         setError("Invalid Username & Password");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error("Server error. Please try again later.", { position: "top-center", autoClose: 3000 });
//       setError("Server error. Please try again later.");
//     }
//     setIsLoading(false);
//   };
  

//   const verifyBranch = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const res = await api.post("/api/branch/login", { username, password });
//       if (res.data.success) {
//         localStorage.setItem("userType", "branch");
//         localStorage.setItem("username", username);
//         toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
//         navigate("/app/society/dashboard");
//       } else {
//         toast.error("Invalid Username & Password", { position: "top-center", autoClose: 3000 });
//         setError("Invalid Username & Password");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error("Server error. Please try again later.", { position: "top-center", autoClose: 3000 });
//       setError("Server error. Please try again later.");
//     }
//     setIsLoading(false);
//   };
  
  
//   // const verifyConsumer = async () => {
//   //   setIsLoading(true);
//   //   setError("");
//   //   try {
//   //     console.log("API Response:");
//   //     // navigate(`/app/savings/account/${accountNo}`);
//   //     const response = await api.get(`/api/savings/${accountNo}`);
//   //     if (response.data && response.data.data) {
//   //       localStorage.setItem("userType", "consumer");
//   //       localStorage.setItem("accountNo", accountNo);
//   //       navigate(`/app/savings/account/${accountNo}`);
//   //     } else {
//   //       setError("Account not found.");
//   //     }
//   //   } catch (error) {
//   //     console.error("API Error:", error);
//   //     setError("Error fetching account details. Please check the account number.");
//   //   }
//   //   setIsLoading(false);
//   // };

//   const verifyConsumer = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       let response;
  
//       // Check in Savings Account
//       try {
//         response = await api.get(`/api/savings/${accountNo}`);
//         if (response.data && response.data.data) {
//           localStorage.setItem("userType", "consumer");
//           localStorage.setItem("accountNo", accountNo);
//           navigate(`/app/savings/account/${accountNo}`);
//           return;
//         }
//       } catch (err) {
//         console.warn("Savings account not found or error:", err);
//       }
  
//       // Check in Loan Account
//       try {
//         response = await api.get(`/api/loan/${accountNo}`);
//         if (response.data && response.data.data) {
//           localStorage.setItem("userType", "loan");
//           localStorage.setItem("accountNo", accountNo);
//           navigate(`/app/loan/account/${accountNo}`);
//           return;
//         }
//       } catch (err) {
//         console.warn("Loan account not found or error:", err);
//       }
  
//       // Check in Investment Account
//       try {
//         response = await api.get(`/api/investment/${accountNo}`);
//         if (response.data && response.data.data) {
//           localStorage.setItem("userType", "investment");
//           localStorage.setItem("accountNo", accountNo);
//           navigate(`/app/investment/account/${accountNo}`);
//           return;
//         }
//       } catch (err) {
//         console.warn("Investment account not found or error:", err);
//       }
  
//       // If no account found in any category
//       setError("Account not found.");
  
//     } catch (error) {
//       console.error("API Error:", error);
//       setError("Error fetching account details. Please check the account number.");
//     }
//     setIsLoading(false);
//   };
  


//   return (
//     <div className="login-container">
//       <div className="background-overlay"></div>

//       <div className="switch-buttons">
//         <button className={loginType === "consumer" ? "active" : ""} onClick={() => handleToggle("consumer")}>
//           Consumer
//         </button>
//         <button className={loginType === "branch" ? "active" : ""} onClick={() => handleToggle("branch")}>
//           Branch
//         </button>
//         <button className={loginType === "admin" ? "active" : ""} onClick={() => handleToggle("admin")}>
//           Admin
//         </button>

//       </div>

//       <div className={`card ${loginType}`}>
//         <img className="logo" src={Logo} alt="Logo" />
//         <h2>Welcome, {loginType.charAt(0).toUpperCase() + loginType.slice(1)}!</h2>
//         <h3>Golden Future Supportive Trust</h3>
//         <br />

//         {loginType === "consumer" ? (
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Enter Account Number"
//               value={accountNo}
//               onChange={(e) => setAccountNo(e.target.value)}
//               required
//             />
//             <button onClick={verifyConsumer} disabled={isLoading}>
//               {isLoading ? "Searching..." : "Submit"}
//             </button>
//             {error && <p className="error-text">{error}</p>}
//           </div>
//         ) : (
//           <form className="form" onSubmit={loginType === "branch" ? verifyBranch : verifyAdmin}>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {error && <p className="error-text">{error}</p>}
//             {isLoading ? <div className="loader"></div> : <button type="submit">Sign In</button>}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignIn;




// //=============================================================//



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import Logo from "../../../assets/icons/logo.svg";
import "./SignIn.css";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("consumer");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [dob, setDob] = useState(""); // New DOB State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleToggle = (type) => {
    setLoginType(type);
    setUsername("");
    setPassword("");
    setAccountNo("");
    setDob(""); // Reset DOB
    setError("");
  };

  const verifyAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/api/admin/login", { username, password });
      if (res.data.success) {
        localStorage.setItem("userType", "admin");
        localStorage.setItem("username", username);
        toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
        navigate("/app/society/adminpanel");
      } else {
        toast.error("Invalid Username & Password", { position: "top-center", autoClose: 3000 });
        setError("Invalid Username & Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Server error. Please try again later.", { position: "top-center", autoClose: 3000 });
      setError("Server error. Please try again later.");
    }
    setIsLoading(false);
  };

  const verifyBranch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/api/branch/login", { username, password });
      if (res.data.success) {
        localStorage.setItem("userType", "branch");
        localStorage.setItem("username", username);
        toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
        navigate("/app/society/dashboard");
      } else {
        toast.error("Invalid Username & Password", { position: "top-center", autoClose: 3000 });
        setError("Invalid Username & Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Server error. Please try again later.", { position: "top-center", autoClose: 3000 });
      setError("Server error. Please try again later.");
    }
    setIsLoading(false);
  };

  const verifyConsumer = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Consumer Login API Call with Account Number & DOB
      const response = await api.post(`/api/consumer/login`, {
        accountNo: accountNo,
        dob: dob, 
      });

      if (response.data && response.data.success) {
        localStorage.setItem("userType", "consumer");
        localStorage.setItem("accountNo", accountNo);
        navigate(`/app/savings/account/${accountNo}`);
      } else {
        setError("Invalid Account Number or DOB.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError("Error fetching account details. Please check the inputs.");
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>

      <div className="switch-buttons">
        <button className={loginType === "consumer" ? "active" : ""} onClick={() => handleToggle("consumer")}>
          Consumer
        </button>
        <button className={loginType === "branch" ? "active" : ""} onClick={() => handleToggle("branch")}>
          Branch
        </button>
        <button className={loginType === "admin" ? "active" : ""} onClick={() => handleToggle("admin")}>
          Admin
        </button>
      </div>

      <div className={`card ${loginType}`}>
        <img className="logo" src={Logo} alt="Logo" />
        <h2>Welcome, {loginType.charAt(0).toUpperCase() + loginType.slice(1)}!</h2>
        <h3>Golden Future Supportive Trust</h3>
        <br />

        {loginType === "consumer" ? (
          <div className="search-bar">
            {/* Account Number Input */}
            <input
              type="text"
              placeholder="Enter Account Number"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              required
            />

            {/* Date of Birth Input */}
            <input
              type="date"
              placeholder="Enter Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />

            <button onClick={verifyConsumer} disabled={isLoading}>
              {isLoading ? "Searching..." : "Submit"}
            </button>

            {error && <p className="error-text">{error}</p>}
          </div>
        ) : (
          <form className="form" onSubmit={loginType === "branch" ? verifyBranch : verifyAdmin}>
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
            {error && <p className="error-text">{error}</p>}
            {isLoading ? <div className="loader"></div> : <button type="submit">Sign In</button>}
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
