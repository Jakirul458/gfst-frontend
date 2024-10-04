import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './Profile.css';

function InvestmentAccProfile() {
  const params = useParams();
  const [accountDetails, setAccountDetails] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.split('/')[3], "somelog");

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
    const fetchTransactions = async () => {
      try {
        if (!accountDetails) return;
        const response = await api.get(`/api/transaction/type/${accountDetails?.accountNo}`);
        console.log(response, "responvkdfnvj");
        setTransactions(response.data.data);
      } catch (error) {
        setError('Error fetching transactions');
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
      <head><title>Loan Account Profile</title></head>
      <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
      </style>
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

  if (error) {
    return <p>{error}</p>;
  }

  if (!accountDetails) {
    return <p>Loading account details...</p>;
  }

  return (
    <>
      <div id="account-profile" className="account-profile-container">
       <br />
        <div className="account-details">
           <p>Investment Account number : <strong>{accountDetails.accountNo}</strong></p>
          <p>Name :<strong> {accountDetails.name}</strong></p>
          <p>Email :<strong> {accountDetails.email}</strong></p>
          <p>Mobile :<strong> {accountDetails.mobileNo}</strong></p>
          <p>Aadhar :<strong> {accountDetails.AadharNo}</strong></p>
          <p>Address :<strong> {accountDetails.Address}</strong></p>
          <p>Investment Amount : ₹<strong> {accountDetails.investmentAmount}</strong></p>
          <p>Total profit Return : ₹ <strong> {accountDetails.profitAmount}</strong></p>
        </div>
        <br />
        <h3>Transaction History</h3>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Profit</th>
              <th>Investment Amount</th>
              <th>Investment Return</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.date}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.typeOfTransaction === 'profit' ? transaction.amount : 0}</td>
                <td>{transaction.typeOfTransaction === 'investment' ? transaction.amount : 0}</td>
                <td>{transaction.typeOfTransaction === 'closeinvestment' ? transaction.amount : 0}</td>
                <td>{transaction.remarks}</td>
              </tr>
            )) : <tr><td colSpan="5">No transactions available</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button onClick={handlePrint} className="print-btn">Print</button>
        <button onClick={handleUpdate} className="update-btn">Update</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </>
  );
}

export default InvestmentAccProfile;
