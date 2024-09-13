import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AccountProfile() {
  const params = useParams();
  const [accountDetails, setAccountDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.split('/')[3], "somelog")

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/savings/${location.pathname.split('/')[3]}`);
        setAccountDetails(response.data.data);
      } catch (err) {
        setError('Error fetching account details');
        console.error(err);
      }
    };

    fetchAccountDetails();
  }, [location]);

  useEffect(() => {
    if(!accountDetails.accountNo) return;
    const fetchTransactions = async() => {
      try {
        const response = await axios.get(`http://localhost:3001/api/transaction/${accountDetails.accountNo}`);
        setTransactions(response.data.data);
        
      } catch (error) {
        setError('Error fetching account details');
        console.error(err);
      }
    }

    fetchTransactions();
  },[accountDetails])

  const handlePrint = () => {
    const printContents = document.getElementById('account-profile').outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
      <head><title>Print Account Profile</title></head>
      <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/api/savings/${accountDetails.AadharNo}`);
        alert('Account deleted successfully.');
        navigate('/all-accounts'); // Redirect to account list after deletion
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Error deleting account.');
      }
    }
  };

  const handleUpdate = async () => {
    navigate(`/savings/account/update/${accountDetails.accountNo}`);
    
  };

 


  return (
    <>
      <div id="account-profile">
        <h1>Savings Account No : {accountDetails.accountNo}</h1>
        <p><strong>Name:</strong> {accountDetails.name}</p>
        <p><strong>Email:</strong> {accountDetails.email}</p>
        <p><strong>Mobile:</strong> {accountDetails.mobileNo}</p>
        <p><strong>Aadhar:</strong> {accountDetails.AadharNo}</p>
        <p><strong>Address:</strong> {accountDetails.Address}</p>
        <p><strong>Balance:</strong> {accountDetails.balance}</p>
<br />
        <h2>Transaction History</h2>
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
                <td>{transaction.date}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.deposit}</td>
                <td>{transaction.typeOfTransaction === 'deposit'? transaction.amount : 0}</td>
                <td>{transaction.typeOfTransaction === 'widthdraw'? transaction.amount : 0}</td>
                <td>{transaction.remarks}</td>
              </tr>
            )) : <tr><td colSpan="5">No transactions available</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button onClick={handlePrint} className="btn btn-primary">Print</button>
        <button onClick={handleUpdate} className="btn btn-warning">Update</button>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </>
  );
}

export default AccountProfile;
