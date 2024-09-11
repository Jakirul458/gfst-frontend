


import React, { useState } from 'react';
// import './withdraw.css';

const withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [withdraw, setwithdraw] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [remarks, setRemarks] = useState('withdraw'); // Default to 'withdraw'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3001/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ account, date, transactionid, withdraw, remarks }),
      });
      const result = await response.json();
      if (result.success) {
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
      } else {
        setError('An error occurred during the transaction.');
      }
    } catch (err) {
      setError('An error occurred during the transaction.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3001/verify-account?account=${account}`);
      const result = await response.json();

      if (result.exists) {
        setIsVerified(true);
        setAccountName(result.name); // Set the account name
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
          <label>Account No</label>
          <input
            type="text"
            placeholder="Enter Consumer Account Number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
        </div>

        {isVerified && (
          <>
            <p>Consumer Name: {accountName}</p> {/* Display the account name */}

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Transaction ID</label>
              <input
                type="text"
                value={transactionid}
                onChange={(e) => setTransactionid(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>withdraw Amount</label>
              <input
                type="number"
                value={withdraw}
                onChange={(e) => setwithdraw(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <select
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              >
                <option value="withdraw">withdraw</option>
                {/* <option value="Withdraw">Withdraw</option> */}
              </select>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default withdraw;
