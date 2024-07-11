/*
import React from 'react'
import './AllAcounts.css';

function LoanAcounts() {
  const users = [
    // Example data
    { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
    { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
    { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
    { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
    { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
    
    // Add more users here
  ];
  return (

    <>
      
        <h1 className="mb-4">All Loan Accounts</h1>
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
            </tr>
          </thead>
          <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.date}</td>
                            <td>{user.accountNo}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.aadharNo}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
        
     
        <div className='print-btn-container'>
        <button type="print" className="print-btn">Print</button>
        </div>
    </>

  )
}

export default LoanAcounts

*/




import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';


function LoanAccounts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getLoanAccount');
        console.log('API Response:', response.data); // Log the API response
        setUsers(response.data);
      } catch (err) {
         console.error('Error fetching users:', err);
       }
    };

    fetchUsers();
  }, []);

  const handlePrint = () => {
    const printContents = document.getElementById('accounts-table').outerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    // Reload the page to restore the original content
    window.location.reload();
  };

  return (
    <>
      <h1 className="mb-4">All Savings Accounts</h1>
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
            {users.map((user, index) => (
              <tr key={index}>
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

      <div className='print-btn-container'>
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}

export default LoanAccounts;

