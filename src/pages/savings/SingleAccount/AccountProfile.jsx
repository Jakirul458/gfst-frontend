import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import api from '../../../api/index'
import './AccountProfile.css';
import { formatMongoDate } from '../../../util/FormatDate';

function AccountProfile() {
  const params = useParams();
  const [accountDetails, setAccountDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.split('/')[4], "somelog")

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await api.get(`/api/savings/${location.pathname.split('/')[4]}`);

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
        const response = await api.get(`/api/transaction/${accountDetails.accountNo}`);
        console.log(response, "transaciton response")

        const smdata = new Date(response.data.data.createdAt);
        response.data.data.date = smdata.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',        
        });
        
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
      <head><title> Loan Account Profile</title></head>
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
    navigate(`/app/savings/account/delete/${accountDetails.accountNo}`);

  };
  

  const handleUpdate = async () => {
    navigate(`/app/savings/account/update/${accountDetails.accountNo}`);
    
  };

 


  return (
    <>
      <div id="account-profile">
        <p> <strong>Account No : </strong> {accountDetails.accountNo}</p>
        <p><strong>Name: </strong> {accountDetails.name}</p>
        <p><strong>Email: </strong> {accountDetails.email}</p>
        <p><strong>Mobile: </strong> {accountDetails.mobileNo}</p>
        <p><strong>Aadhar: </strong> {accountDetails.AadharNo}</p>
        <p><strong>Address: </strong> {accountDetails.Address}</p>
        <p><strong> Available Balance: ₹</strong> {accountDetails.balance}</p>
<br />
        <h3>Transaction History</h3>
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
                <td>{transaction.typeOfTransaction === 'deposit'? transaction.amount : 0}</td>
                <td>{transaction.typeOfTransaction === 'withdraw'? transaction.amount : 0}</td>
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
