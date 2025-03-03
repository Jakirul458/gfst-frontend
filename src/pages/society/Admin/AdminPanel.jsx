import React, { useState, useEffect } from "react";
import api from '../../../api/index.js'
import "./AdminPanel.css";

const BranchManagement = () => {
  const [branchUsername, setBranchUsername] = useState("");
  const [branchPassword, setBranchPassword] = useState("");
  const [branchRegistry, setBranchRegistry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");


  // useEffect(() => {
  //   fetchBranchRegistry();
  // }, []);

  // const fetchBranchRegistry = async () => {
  //   setIsLoading(true);
  //   try {
      
  //     const response = await api.get("/api/branch/register");
  //     setBranchRegistry(Array.isArray(response.data) ? response.data : []);
  //   } catch (err) {
  //     setStatusMessage("Failed to fetch branch registry");
  //     setBranchRegistry([]);
  //   }
  //   setIsLoading(false);
  // };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (branchUsername && branchPassword) {
      try {
        const response = await api.post("/api/branch/register", {
          username: branchUsername,
          password: branchPassword,
        });
        setBranchRegistry((prevRegistry) => [...prevRegistry, response.data]);
        setBranchUsername("");
        setBranchPassword("");
      } catch (err) {
        setStatusMessage("Failed to create branch credentials");
      }
    }
  };


  return (
    <div className="branch-management-container">
      <h2 className="branch-management-title">Branch Registration Portal</h2>
      {statusMessage && <p className="status-message-error">{statusMessage}</p>}

      <form onSubmit={handleRegistrationSubmit} className="branch-registration-form">
        <div className="form-group">
          <label htmlFor="branch-username">Branch Username</label>
          <input
            id="branch-username"
            type="text"
            value={branchUsername}
            onChange={(e) => setBranchUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="branch-password">Branch Password</label>
          <input
            id="branch-password"
            type="password"
            value={branchPassword}
            onChange={(e) => setBranchPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Register Branch</button>
      </form>

      {isLoading ? (
        <p className="loading-text">Loading branch data...</p>
      ) : (
        branchRegistry.length > 0 && (
          <div className="branch-registry-container">
            <h2 className="branch-registry-title">Registered Branches</h2>
            <table className="branch-registry-table">
              <thead>
                <tr>
                  <th>Branch ID</th>
                  <th>Branch Username</th>
                </tr>
              </thead>
              <tbody>
                {branchRegistry.map((branch, index) => (
                  <tr key={index}>
                    <td>{branch.id}</td>
                    <td>{branch.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
      <h3>branch id create hoche but fetch kore show hochhe na</h3>
    </div>
  );
};

export default BranchManagement;
