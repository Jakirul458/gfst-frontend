
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

const BranchManagement = () => {
  const [branchUsername, setBranchUsername] = useState("");
  const [branchPassword, setBranchPassword] = useState("");
  const [branchRegistry, setBranchRegistry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchBranchRegistry();
  }, []);

  const fetchBranchRegistry = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/branch/register");
      setBranchRegistry(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setStatusMessage("Failed to fetch branch registry");
      setBranchRegistry([]);
    }
    setIsLoading(false);
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (branchUsername && branchPassword) {
      try {
        const response = await axios.post("/api/branch/register", { 
          username: branchUsername, 
          password: branchPassword 
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

      {/* Registration Form */}
      <form onSubmit={handleRegistrationSubmit} className="branch-registration-form">
        <div className="form-field-container">
          <label htmlFor="branch-username" className="form-field-label">Branch Username</label>
          <input
            id="branch-username"
            type="text"
            placeholder="Enter branch username"
            value={branchUsername}
            onChange={(e) => setBranchUsername(e.target.value)}
            className="form-field-input"
            required
          />
        </div>

        <div className="form-field-container">
          <label htmlFor="branch-password" className="form-field-label">Branch Password</label>
          <input
            id="branch-password"
            type="password"
            placeholder="Enter branch password"
            value={branchPassword}
            onChange={(e) => setBranchPassword(e.target.value)}
            className="form-field-input"
            required
          />
        </div>

        <button
          type="submit"
          className="registration-submit-button"
        >
          Register Branch
        </button>
      </form>

      {/* Loading & Branch Registry */}
      {isLoading ? (
        <p className="loading-indicator">Loading branch data...</p>
      ) : (
        branchRegistry.length > 0 && (
          <div className="branch-registry-container">
            <h2 className="branch-registry-title">Registered Branches</h2>
            <div className="registry-table-container">
              <table className="branch-registry-table">
                <thead className="registry-table-header">
                  <tr>
                    <th className="registry-table-cell">Branch ID</th>
                    <th className="registry-table-cell">Branch Username</th>
                  </tr>
                </thead>
                <tbody>
                  {branchRegistry.map((branch, index) => (
                    <tr key={index} className="registry-table-row">
                      <td className="registry-table-cell">{branch.id}</td>
                      <td className="registry-table-cell">{branch.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BranchManagement;