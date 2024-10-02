import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './Profile.css';

function InvestmentProfile() {
  const params = useParams();
  const [accountDetails, setAccountDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await api.get(`/api/investment/${location.pathname.split('/')[4]}`);
        setAccountDetails(response.data.data);
      } catch (err) {
        setError('Error fetching account details');
        console.error(err);
      }
    };

    fetchAccountDetails();
  }, [location]);

  useEffect(() => {
    if (!accountDetails.accountNo) return;
    const fetchTransactions = async () => {
      try {
        const response = await api.get(`/api/transaction/${accountDetails.accountNo}`);
        setTransactions(response.data.data);
      } catch (error) {
        setError('Error fetching account details');
        console.error(err);
      }
    };

    fetchTransactions();
  }, [accountDetails]);

  const handlePrint = () => {
    const printContents = document.getElementById('account-profile').outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
      <head><title>Savings Account Profile</title>
      <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
      </style>
      </head>
      <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDelete = () => {
    navigate(`/app/investment/account/delete/${accountDetails.accountNo}`);
  };

  const handleUpdate = async () => {
    navigate(`/app/investment/account/update/${accountDetails.accountNo}`);
  };

  return (
    <div className="account-profile-container" id="account-profile">

      <br />
      <div className="account-details">
        <p>Investment Account No: <strong>{accountDetails.accountNo} </strong></p>
        <p>Name : <strong> {accountDetails.name}</strong></p>
        <p>Email :  <strong>{accountDetails.email}</strong></p>
        <p>Mobile : <strong> {accountDetails.mobileNo}</strong></p>
        <p>Aadhar :  <strong>{accountDetails.AadharNo}</strong></p>
        <p>Address : <strong> {accountDetails.Address}</strong></p>
        <p>Available Balance : ₹<strong> {accountDetails.investmentAmount}</strong></p>
        <br />
        <h3>Transaction History</h3>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Deposit</th>
            <th>Withdraw</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{formatMongoDate(transaction.createdAt)}</td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.typeOfTransaction === 'deposit' ? transaction.amount : 0}</td>
              <td>{transaction.typeOfTransaction === 'withdraw' ? transaction.amount : 0}</td>
              <td>{transaction.remarks}</td>
            </tr>
          )) : <tr><td colSpan="5">No transactions available</td></tr>}
        </tbody>
      </table>
      <div className="action-buttons">
        <button onClick={handlePrint} className="print-btn">Print</button>
        <button onClick={handleUpdate} className="update-btn">Update</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>

    </div>
  );
  
}

export default InvestmentProfile;
