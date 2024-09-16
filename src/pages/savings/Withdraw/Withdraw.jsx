import axios from 'axios';
import React, { useState } from 'react';
import api from '../../../api/index'
// import './withdraw.css';

const Withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [withdraw, setwithdraw] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [remarks, setRemarks] = useState('withdraw'); // Default to 'withdraw'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/withdraw', {
        accountNo : account, amount : withdraw, remarks },
      );
      console.log(response.data)
      if (response.data.success) {
        alert('Transaction successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setwithdraw('');
        setRemarks('withdraw');
        setError(null);
        setIsVerified(false);
        setAccountName('');
        setAccountBalance('');
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
        setAccountBalance(response.data.data.balance);
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName(''); 
        setAccountBalance('');
        setError('Account does not exist.');
      }
    }catch (err) {
      setIsVerified(false);
      setAccountName(''); 
      setAccountBalance('');
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="account-form">
        {error && <p className="error">{error}</p>}

        <div className="form-group">
        <h2 style={{ textAlign: 'center' }}>For Withdraw</h2>


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
            <p> Previous Balance:  <strong>₹ {accountBalance}</strong></p><br />   
            <div className="form-group">
              
              <input
                type="number"
                placeholder="Enter withdraw Amount "
                value={withdraw}
                onChange={(e) => setwithdraw(e.target.value)}
              />
            </div>

            {/* <div className="form-group">
              <label>Remarks</label>
              <select
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              >
                <option value="withdraw">withdraw</option>
               
              </select>
            </div> */}

            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default Withdraw;
