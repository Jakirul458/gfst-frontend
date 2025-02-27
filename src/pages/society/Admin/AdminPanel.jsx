
// import React from 'react';
// import './AdminPanel.css';
// import { Outlet } from 'react-router-dom';

// function AdminPanel() {
//   return (
//     // <div className="adminpanel-container">
//     //   <div className="sidebar__container">
//     //     <SideBar />
//     //   </div>
//     //   <div className="content__container">
//     //     <Outlet />
//     //   </div>
//     // </div>
//     <>
   
//     {/* <div>
//       <SideBar />
//     </div> */}
//     </>
//   );
// }

// export default AdminPanel;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/branch/register");
      setBranches(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError("Failed to fetch branches");
      setBranches([]);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (username && password) {
      try {
        const response = await axios.post("/api/branch/register", { username, password });
        setBranches((prevBranches) => [...prevBranches, response.data]);
        setUsername("");
        setPassword("");
      } catch (err) {
        setError("Failed to create branch");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Branch ID</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        branches.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Branch List</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Username</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">{branch.id}</td>
                    <td className="border px-4 py-2">{branch.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default AdminPanel;
