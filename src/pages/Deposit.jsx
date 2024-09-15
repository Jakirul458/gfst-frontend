
import axios from 'axios';
import React, { useState } from 'react';
import api from '../api/index'
// import './deposit.css';

const deposit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setdeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [remarks, setRemarks] = useState('deposit'); // Default to 'deposit'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/deposit/', {
        accountNo : account, amount : deposit, remarks },
      );
      console.log(response.data)
      if (response.data.success) {
        alert('Transaction successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setdeposit('');
        setRemarks('deposit');
        setError(null);
        setIsVerified(false);
        setAccountName('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during the transaction.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await api.get(`/api/savings/${account}`);

      if (response.data.success) {
        setIsVerified(true);
        setAccountName(response.data.data.name);
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName(''); // Clear the account name if verification fails
        setError('Account does not exist.');
      }
    }catch (err) {
      setIsVerified(false);
      setAccountName(''); // Clear the account name on error
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="account-form">
        {error && <p className="error">{error}</p>}

        <div className="form-group">
          
        <h2 style={{ textAlign: 'center' }}>For Deposit</h2>

          <br />
          <input
            type="text"
            placeholder="Enter savings account number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
        </div>

        {isVerified && (
          <>
            <p>Consumer Name: <strong>{accountName}</strong></p><br />      
            <div className="form-group">      
              <input
                type="number"
                value={deposit}
                onChange={(e) => setdeposit(e.target.value)}
              />
            </div>
{/* 
            <div className="form-group">
              <label>Remarks</label>
              <select
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              >
                <option value="deposit">deposit</option>
         
              </select>
            </div> */}

            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default deposit;
