// // import React, { useState, useEffect } from "react";
// // import api from '../../../api/index.js'
// // import "./AdminPanel.css";

// // const BranchManagement = () => {
// //   const [branchUsername, setBranchUsername] = useState("");
// //   const [branchPassword, setBranchPassword] = useState("");
// //   const [branchRegistry, setBranchRegistry] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [statusMessage, setStatusMessage] = useState("");


// //   useEffect(() => {
// //     fetchBranchRegistry();
// //   }, []);

// //   const fetchBranchRegistry = async () => {
// //     setIsLoading(true);
// //     try {
      
// //       const response = await api.get("/api/branch/register");
// //       setBranchRegistry(Array.isArray(response.data) ? response.data : []);
// //     } catch (err) {
// //       setStatusMessage("Failed to fetch branch registry");
// //       setBranchRegistry([]);
// //     }
// //     setIsLoading(false);
// //   };

// //   const handleRegistrationSubmit = async (e) => {
// //     e.preventDefault();
// //     setStatusMessage("");

// //     if (branchUsername && branchPassword) {
// //       try {
// //         const response = await api.post("/api/branch/register", {
// //           username: branchUsername,
// //           password: branchPassword,
// //         });
// //         setBranchRegistry((prevRegistry) => [...prevRegistry, response.data]);
// //         setBranchUsername("");
// //         setBranchPassword("");
// //       } catch (err) {
// //         setStatusMessage("Failed to create branch credentials");
// //       }
// //     }
// //   };


// //   return (
// //     <div className="branch-management-container">
// //       <h2 className="branch-management-title">Branch Registration Portal</h2>
// //       {statusMessage && <p className="status-message-error">{statusMessage}</p>}

// //       <form onSubmit={handleRegistrationSubmit} className="branch-registration-form">
// //         <div className="form-group">
// //           <label htmlFor="branch-username">Branch Username</label>
// //           <input
// //             id="branch-username"
// //             type="text"
// //             value={branchUsername}
// //             onChange={(e) => setBranchUsername(e.target.value)}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="branch-password">Branch Password</label>
// //           <input
// //             id="branch-password"
// //             type="password"
// //             value={branchPassword}
// //             onChange={(e) => setBranchPassword(e.target.value)}
// //             required
// //           />
// //         </div>

// //         <button type="submit" className="submit-button">Register Branch</button>
// //       </form>

// //       {isLoading ? (
// //         <p className="loading-text">Loading branch data...</p>
// //       ) : (
// //         branchRegistry.length > 0 && (
// //           <div className="branch-registry-container">
// //             <h2 className="branch-registry-title">Registered Branches</h2>
// //             <table className="branch-registry-table">
// //               <thead>
// //                 <tr>
// //                   <th>Branch ID</th>
// //                   <th>Branch Username</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {branchRegistry.map((branch, index) => (
// //                   <tr key={index}>
// //                     <td>{branch.username}</td>
// //                     <td>{branch.password}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )
// //       )}
// //       <h3>branch id create hoche but fetch kore show hochhe na</h3>
// //     </div>
// //   );
// // };

// // export default BranchManagement;



// import React, { useState, useEffect } from "react";
// import api from "../../../api/index.js";
// import "./AdminPanel.css";

// const BranchManagement = () => {
//   const [branchUsername, setBranchUsername] = useState("");
//   const [branchPassword, setBranchPassword] = useState("");
//   const [branchRegistry, setBranchRegistry] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");
//   const [resetUsername, setResetUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   useEffect(() => {
//     fetchBranchRegistry();
//   }, []);

//   // 🟢 Fetch Registered Branches
//   const fetchBranchRegistry = async () => {
//     setIsLoading(true);
//     try {
//       const response = await api.get("/api/branch/register");
//       setBranchRegistry(response.data);
//     } catch (err) {
//       setStatusMessage("Failed to fetch branch registry");
//     }
//     setIsLoading(false);
//   };

//   // 🟢 Register a New Branch
//   const handleRegistrationSubmit = async (e) => {
//     e.preventDefault();
//     setStatusMessage("");

//     if (branchUsername && branchPassword) {
//       try {
//         const response = await api.post("/api/branch/register", {
//           username: branchUsername,
//           password: branchPassword,
//         });
//         setBranchRegistry([...branchRegistry, response.data]);
//         setBranchUsername("");
//         setBranchPassword("");
//       } catch (err) {
//         setStatusMessage("Failed to create branch credentials");
//       }
//     }
//   };

//   // 🔴 Reset Password
//   const handleResetPassword = async () => {
//     if (!resetUsername || !newPassword) {
//       setStatusMessage("Username and new password required");
//       return;
//     }
  
//     try {
//       const response = await api.post("/api/branch/reset-branch-password", {
//         username: resetUsername,
//         newPassword,
//       });
  
//       console.log("Reset Password Response:", response);
  
//       if (response.status === 200) {
//         setStatusMessage("Password reset successfully");
//         setResetUsername("");
//         setNewPassword("");
//       } else {
//         setStatusMessage(response.data.message || "Failed to reset password");
//       }
//     } catch (err) {
//       console.error("Error resetting password:", err.response ? err.response.data : err.message);
//       setStatusMessage(err.response?.data?.message || "Failed to reset password");
//     }
//   };
  

//   return (
//     <div className="branch-management-container">
//       <h2 className="branch-management-title">Branch Registration Portal</h2>
//       {statusMessage && <p className="status-message-error">{statusMessage}</p>}

//       {/* 🟢 Branch Registration Form */}
//       <form onSubmit={handleRegistrationSubmit} className="branch-registration-form">
//         <div className="form-group">
//           <label htmlFor="branch-username">Branch Username</label>
//           <input
//             id="branch-username"
//             type="text"
//             value={branchUsername}
//             onChange={(e) => setBranchUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="branch-password">Branch Password</label>
//           <input
//             id="branch-password"
//             type="password"
//             value={branchPassword}
//             onChange={(e) => setBranchPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="submit-button">Register Branch</button>
//       </form>

//       {/* 🟢 Branch Registry Table */}
//       {isLoading ? (
//         <p className="loading-text">Loading branch data...</p>
//       ) : (
//         branchRegistry.length > 0 && (
//           <div className="branch-registry-container">
//             <h2 className="branch-registry-title">Registered Branches</h2>
//             <table className="branch-registry-table">
//               <thead>
//                 <tr>
//                   <th>Branch Username</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {branchRegistry.map((branch, index) => (
//                   <tr key={index}>
//                     <td>{branch.username}</td>
//                     <td>
//                       <button onClick={() => setResetUsername(branch.username)}>
//                         Reset Password
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )
//       )}

//       {/* 🔴 Password Reset Form */}
//       {resetUsername && (
//         <div className="password-reset-container">
//           <h3>Reset Password for {resetUsername}</h3>
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <button onClick={handleResetPassword}>Update Password</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BranchManagement;








// import React, { useState, useEffect } from "react";
// import api from "../../../api/index.js";
// import "./AdminPanel.css";

// const BranchManagement = () => {
//   const [branchUsername, setBranchUsername] = useState("");
//   const [branchPassword, setBranchPassword] = useState("");
//   const [branchRegistry, setBranchRegistry] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [resetUsername, setResetUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [showBranchList, setShowBranchList] = useState(false);

//   useEffect(() => {
//     fetchBranchRegistry();
//   }, []);

//   const fetchBranchRegistry = async () => {
//     setIsLoading(true);
//     try {
//       const response = await api.get("/api/branch/register");
//       setBranchRegistry(response.data);
//     } catch (err) {
//       setStatusMessage("Failed to fetch branch registry");
//     }
//     setIsLoading(false);
//   };

//   const handleRegistrationSubmit = async (e) => {
//     e.preventDefault();
//     setStatusMessage("");
//     setSuccessMessage("");

//     if (branchUsername && branchPassword) {
//       try {
//         const response = await api.post("/api/branch/register", {
//           username: branchUsername,
//           password: branchPassword,
//         });

//         setBranchRegistry([...branchRegistry, response.data]);
//         setBranchUsername("");
//         setBranchPassword("");
//         setSuccessMessage("Branch registered successfully!");
//         setTimeout(() => setSuccessMessage(""), 3000);
//       } catch (err) {
//         setStatusMessage("Failed to create branch credentials");
//       }
//     }
//   };

//   const handleResetPassword = async () => {
//     if (!resetUsername || !newPassword) {
//       setStatusMessage("Username and new password required");
//       return;
//     }

//     try {
//       const response = await api.post("/api/branch/reset-branch-password", {
//         username: resetUsername,
//         newPassword,
//       });

//       if (response.status === 200) {
//         setSuccessMessage("Password reset successfully");
//         setStatusMessage("");
//         setResetUsername("");
//         setNewPassword("");
//         setTimeout(() => setSuccessMessage(""), 3000);
//       } else {
//         setStatusMessage(response.data.message || "Failed to reset password");
//       }
//     } catch (err) {
//       setStatusMessage(err.response?.data?.message || "Failed to reset password");
//     }
//   };

//   const cancelPasswordReset = () => {
//     setResetUsername("");
//     setNewPassword("");
//   };

//   return (
//     <div className="branch-management">
//       <h2 className="branch-management__title">Branch Registration Portal</h2>
      
//       {statusMessage && <div className="branch-management__message branch-management__message--error">{statusMessage}</div>}
//       {successMessage && <div className="branch-management__message branch-management__message--success">{successMessage}</div>}

//       <form onSubmit={handleRegistrationSubmit} className="branch-management__form">
//         <div className="branch-management__form-group">
//           <label htmlFor="branch-username" className="branch-management__label">Branch Username</label>
//           <input
//             id="branch-username"
//             type="text"
//             value={branchUsername}
//             onChange={(e) => setBranchUsername(e.target.value)}
//             className="branch-management__input"
//             required
//           />
//         </div>

//         <div className="branch-management__form-group">
//           <label htmlFor="branch-password" className="branch-management__label">Branch Password</label>
//           <input
//             id="branch-password"
//             type="password"
//             value={branchPassword}
//             onChange={(e) => setBranchPassword(e.target.value)}
//             className="branch-management__input"
//             required
//           />
//         </div>

//         <button type="submit" className="branch-management__button branch-management__button--primary">
//           Register Branch
//         </button>
//       </form>

//       <div className="branch-management__list-toggle">
//         <button
//           className="branch-management__button branch-management__button--secondary"
//           onClick={() => setShowBranchList(!showBranchList)}
//         >
//           {showBranchList ? "Hide Branch List" : "Show Branch List"}
//         </button>
//       </div>

//       {showBranchList && (
//         <div className="branch-management__registry">
//           {isLoading ? (
//             <p className="branch-management__loading">Loading branch data...</p>
//           ) : (
//             branchRegistry.length > 0 && (
//               <div className="branch-management__table-container">
//                 <h3 className="branch-management__subtitle">Registered Branches</h3>
//                 <div className="branch-management__table-wrapper">
//                   <table className="branch-management__table">
//                     <thead>
//                       <tr>
//                         <th className="branch-management__th">Branch Username</th>
//                         <th className="branch-management__th">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {branchRegistry.map((branch, index) => (
//                         <tr key={index} className="branch-management__tr">
//                           <td className="branch-management__td">{branch.username}</td>
//                           <td className="branch-management__td">
//                             <button 
//                               className="branch-management__button branch-management__button--small"
//                               onClick={() => setResetUsername(branch.username)}
//                             >
//                               Reset Password
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )
//           )}
//           {branchRegistry.length === 0 && !isLoading && (
//             <p className="branch-management__empty">No branches registered yet.</p>
//           )}
//         </div>
//       )}

//       {resetUsername && (
//         <div className="branch-management__reset-modal">
//           <div className="branch-management__reset-content">
//             <h3 className="branch-management__reset-title">Reset Password for {resetUsername}</h3>
//             <div className="branch-management__form-group">
//               <label htmlFor="new-password" className="branch-management__label">New Password</label>
//               <input
//                 id="new-password"
//                 type="password"
//                 placeholder="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="branch-management__input"
//                 required
//               />
//             </div>
//             <div className="branch-management__button-group">
//               <button 
//                 className="branch-management__button branch-management__button--primary"
//                 onClick={handleResetPassword}
//               >
//                 Update Password
//               </button>
//               <button 
//                 className="branch-management__button branch-management__button--cancel"
//                 onClick={cancelPasswordReset}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BranchManagement;






import React, { useState, useEffect } from "react";
import api from "../../../api/index.js";
import "./AdminPanel.css";

const BranchManagement = () => {
  const [branchUsername, setBranchUsername] = useState("");
  const [branchPassword, setBranchPassword] = useState("");
  const [branchRegistry, setBranchRegistry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [resetUsername, setResetUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showBranchList, setShowBranchList] = useState(false);

  useEffect(() => {
    fetchBranchRegistry();
  }, []);

  const fetchBranchRegistry = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/api/branch/register");
      setBranchRegistry(response.data);
    } catch (err) {
      setStatusMessage("Failed to fetch branch registry");
    }
    setIsLoading(false);
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setSuccessMessage("");

    if (branchUsername && branchPassword) {
      try {
        const response = await api.post("/api/branch/register", {
          username: branchUsername,
          password: branchPassword,
        });

        setBranchRegistry([...branchRegistry, response.data]);
        setBranchUsername("");
        setBranchPassword("");
        setSuccessMessage("Branch registered successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (err) {
        setStatusMessage("Failed to create branch credentials");
      }
    }
  };

  const handleResetPassword = async () => {
    if (!resetUsername || !newPassword) {
      setStatusMessage("Username and new password required");
      return;
    }

    try {
      const response = await api.post("/api/branch/reset-branch-password", {
        username: resetUsername,
        newPassword,
      });

      if (response.status === 200) {
        setSuccessMessage("Password reset successfully");
        setStatusMessage("");
        setResetUsername("");
        setNewPassword("");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setStatusMessage(response.data.message || "Failed to reset password");
      }
    } catch (err) {
      setStatusMessage(err.response?.data?.message || "Failed to reset password");
    }
  };

  const cancelPasswordReset = () => {
    setResetUsername("");
    setNewPassword("");
  };

  return (
    <div className="branch-management">
      <h2 className="branch-management__title">Branch Registration Portal</h2>
      
      {statusMessage && <div className="branch-management__message branch-management__message--error">{statusMessage}</div>}
      {successMessage && <div className="branch-management__message branch-management__message--success">{successMessage}</div>}

      <form onSubmit={handleRegistrationSubmit} className="branch-management__form">
        <div className="branch-management__form-group">
          <label htmlFor="branch-username" className="branch-management__label">Branch Username</label>
          <input
            id="branch-username"
            type="text"
            value={branchUsername}
            onChange={(e) => setBranchUsername(e.target.value)}
            className="branch-management__input"
            required
          />
        </div>

        <div className="branch-management__form-group">
          <label htmlFor="branch-password" className="branch-management__label">Branch Password</label>
          <input
            id="branch-password"
            type="password"
            value={branchPassword}
            onChange={(e) => setBranchPassword(e.target.value)}
            className="branch-management__input"
            required
          />
        </div>

        <div className="branch-management__button-container">
          <button type="submit" className="branch-management__button branch-management__button--primary">
            Register Branch
          </button>
        </div>
      </form>

      <div className="branch-management__list-toggle">
        <button
          className="branch-management__button branch-management__button--secondary"
          onClick={() => setShowBranchList(!showBranchList)}
        >
          {showBranchList ? "Hide Branch List" : "Show Branch List"}
        </button>
      </div>

      {showBranchList && (
        <div className="branch-management__registry">
          {isLoading ? (
            <p className="branch-management__loading">Loading branch data...</p>
          ) : (
            branchRegistry.length > 0 && (
              <div className="branch-management__table-container">
                <h3 className="branch-management__subtitle">Registered Branches</h3>
                <div className="branch-management__table-wrapper">
                  <table className="branch-management__table">
                    <thead>
                      <tr>
                        <th className="branch-management__th">Branch Username</th>
                        <th className="branch-management__th">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {branchRegistry.map((branch, index) => (
                        <tr key={index} className="branch-management__tr">
                          <td className="branch-management__td">{branch.username}</td>
                          <td className="branch-management__td">
                            <button 
                              className="branch-management__button branch-management__button--small"
                              onClick={() => setResetUsername(branch.username)}
                            >
                              Reset Password
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
          {branchRegistry.length === 0 && !isLoading && (
            <p className="branch-management__empty">No branches registered yet.</p>
          )}
        </div>
      )}

      {resetUsername && (
        <div className="branch-management__reset-modal">
          <div className="branch-management__reset-content">
            <h3 className="branch-management__reset-title">Reset Password for {resetUsername}</h3>
            <div className="branch-management__form-group">
              <label htmlFor="new-password" className="branch-management__label">New Password</label>
              <input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="branch-management__input"
                required
              />
            </div>
            <div className="branch-management__button-group">
              <button 
                className="branch-management__button branch-management__button--primary"
                onClick={handleResetPassword}
              >
                Update Password
              </button>
              <button 
                className="branch-management__button branch-management__button--cancel"
                onClick={cancelPasswordReset}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchManagement;