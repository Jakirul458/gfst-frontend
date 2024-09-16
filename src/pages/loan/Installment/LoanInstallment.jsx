
import axios from 'axios';
import React, { useState } from 'react';
import api from '../../../api';
// import './loantransaction.css';

const loantransaction = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [remarks, setRemarks] = useState('loantransaction'); // Default to 'loantransaction'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/emi', {
        accountNo: account, amount: deposit, remarks
      },
      );
      console.log(response.data)
      if (response.data.success) {
        alert('Transaction successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setDeposit('');
        setRemarks('EMI');
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
      const response = await api.get(`/api/loan/${account}`);

      if (response.data.success) {
        setIsVerified(true);
        setAccountName(response.data.data.name);
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName(''); // Clear the account name if verification fails
        setError('Account does not exist.');
      }
    } catch (err) {
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
          <h2 style={{ textAlign: 'center' }}>For EMI</h2>
          <input
            type="text"
            placeholder="Enter loan account number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
        </div>

        {isVerified && (
          <>
            <p>Consumer Name: <strong>{accountName}</strong></p><br />

            {/* <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div> */}

            {/* <div className="form-group">
              <label>Transaction ID</label>
              <input
                type="text"
                value={transactionid}
                onChange={(e) => setTransactionid(e.target.value)}
              />
            </div> */}

            <div className="form-group">

              <input
                type="number"
                placeholder="Enter amount"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>

            {/* <div className="form-group">
              <label>Remarks</label>
              <select
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              >
                <option value="loantransaction">loantransaction</option>
                
              </select>
            </div> */}

            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default loantransaction;
