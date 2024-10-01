import React, { useState } from 'react';
import api from '../../../api/index';
import './Deposit.css';

const Deposit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [remarks, setRemarks] = useState('deposit'); // Default to 'deposit'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/deposit/', {
        accountNo: account,
        amount: deposit,
        remarks,
      });
      console.log(response.data);
      if (response.data.success) {
        alert('Transaction successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setDeposit('');
        setRemarks('deposit');
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
    } catch (err) {
      setIsVerified(false);
      setAccountName('');
      setAccountBalance('');
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <div className="deposit-container">
      <form onSubmit={handleSubmit} className="deposit-form">
        <h2 className="form-title">Deposit Funds</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            className="form-control"
            placeholder="Enter savings account number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button
            type="button"
            onClick={handleVerify}
            className="btn verify-btn"
          >
            Verify Account
          </button>
        </div>

        {isVerified && (
          <>
            <div className="verified-info">
              <p>
                Consumer Name: <strong>{accountName}</strong>
              </p>
              <p>
                Present Balance: <strong>₹ {accountBalance}</strong>
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="deposit-amount">Deposit Amount (₹)</label>
              <input
                type="number"
                id="deposit-amount"
                className="form-control"
                placeholder="Enter amount to deposit"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Submit Deposit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Deposit;
