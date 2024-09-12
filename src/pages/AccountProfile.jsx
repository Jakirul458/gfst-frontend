import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';


function AccountProfile() {
  const params= useParams();
  const [accountDetails, setAccountDetails] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/savings/${location.pathname.split('/')[2]}`);
        console.log(response,"hello")
        setAccountDetails(response.data.data);
        // setTransactions(response.data.data.transactions);
      } catch (err) {
        setError('Error fetching account details');
        console.error(err);
      }
    };

    fetchAccountDetails();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!accountDetails) {
    return <p>Loading account details...</p>;
  }

  return (
    <>
      <h1>Account Profile for {accountDetails.account}</h1>
      <p><strong>Name:</strong> {accountDetails.name}</p>
      <p><strong>Email:</strong> {accountDetails.email}</p>
      <p><strong>Mobile:</strong> {accountDetails.mobile}</p>
      <p><strong>Aadhar:</strong> {accountDetails.aadhar}</p>
      <p><strong>Address:</strong> {accountDetails.address}</p>
      <p><strong>Balance:</strong> {accountDetails.balance}</p>

      <h2>Transaction History</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Deposit Amount</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.date}</td>
              <td>{transaction.transactionid}</td>
              <td>{transaction.deposit}</td>
              <td>{transaction.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AccountProfile;
