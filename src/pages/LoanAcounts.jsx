import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';


function LoanAccounts() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getLoanAccount');
        console.log('API Response:', response.data);
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => {
        return (
          user.account?.toString().includes(searchQuery) ||
          user.aadhar?.toString().includes(searchQuery) ||
          user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const printContents = document.getElementById('accounts-table').outerHTML;
    printWindow.document.write(`
      <html>
      <head>
        <title> List of all Loan Accounts </title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        ${printContents}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <h1 className="mb-4">List of Loan Accounts</h1>

      <input
        type="text"
        placeholder="Search by Account Number or Aadhar Number or Name"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4 search-bar"
      />

      <div id="accounts-table">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Account No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Aadhar No</th>
              <th>Address</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.account}>
                <td>{user.date}</td>
                <td>{user.account}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.aadhar}</td>
                <td>{user.address}</td>
                <td>{user.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="print-btn-container">
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}


export default LoanAccounts;

