
/*
import React from 'react'

function FindSavaingAccount() {
  return (
    <div>FindSavaingAccount</div>
  )
}

export default FindSavaingAccount

*/



/* edit 1 */



/*


import React, { useState } from 'react';
import './FindSavingAccount.css';

const FindSavingAccount = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setAccountInfo(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://your-api.com/get-account?accountNo=${accountNo}`);
      const data = await response.json();

      if (data.exists) {
        setAccountInfo(data.account);
      } else {
        setError('Account not found.');
      }
    } catch (err) {
      setError('Error fetching account details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Search consumer saving account</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      //  {error && <p className="error">{error}</p>}

      // {accountInfo && (
      //   <div className="account-info">
      //     <h2>Account Information</h2>
      //     <p><strong>Account No:</strong> {accountInfo.accountNo}</p>
      //     <p><strong>Name:</strong> {accountInfo.name}</p>
      //     <p><strong>Email:</strong> {accountInfo.email}</p>
      //     <p><strong>Mobile No:</strong> {accountInfo.mobileNo}</p>
      //     <p><strong>Aadhar No:</strong> {accountInfo.aadharNo}</p>
      //     <p><strong>Address:</strong> {accountInfo.address}</p>
      //     <p><strong>Account Balance:</strong> ${accountInfo.balance}</p>
      //   </div>
      // )} 
    </div>
  );
};

export default FindSavingAccount;


*/






/*
import React, { useState } from 'react';
import './FindSavingAccount.css';

const FindSavingAccount = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setAccountInfo(null);

    try {
      const response = await fetch(`http://localhost:3001/getSavingaccount?account=${account}`);
      const data = await response.json();

      if (data.exists) {
        setAccountInfo(data.account);
      } else {
        setError('Account not found.');
      }
    } catch (err) {
      setError('Error fetching account details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Search Consumer Saving Account</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {accountInfo && (
        <div className="account-info">
          <h2>Account Information</h2>
          <p><strong>Account No:</strong> {accountInfo.accountNo}</p>
          <p><strong>Name:</strong> {accountInfo.name}</p>
          <p><strong>Email:</strong> {accountInfo.email}</p>
          <p><strong>Mobile No:</strong> {accountInfo.mobileNo}</p>
          <p><strong>Aadhar No:</strong> {accountInfo.aadharNo}</p>
          <p><strong>Address:</strong> {accountInfo.address}</p>
          <p><strong>Account Balance:</strong> ${accountInfo.balance}</p>
        </div>
      )}
    </div>
  );
};

export default FindSavingAccount;


*/





import React, { useState } from 'react';
import './FindSavingAccount.css';

const FindSavingAccount = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setAccountInfo(null);

    try {
      const response = await fetch(`http://localhost:3001/get-account?account=${account}`);
      const data = await response.json();

      if (data.exists) {
        setAccountInfo(data.account);
      } else {
        setError('Account not found.');
      }
    } catch (err) {
      setError('Error fetching account details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Search Consumer Saving Account</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {accountInfo && (
        <div className="account-info">
          <h2>Account Information</h2>
          <p><strong>Account No:</strong> {accountInfo.account}</p>
          <p><strong>Name:</strong> {accountInfo.name}</p>
          <p><strong>Email:</strong> {accountInfo.email}</p>
          <p><strong>Mobile No:</strong> {accountInfo.mobile}</p>
          <p><strong>Aadhar No:</strong> {accountInfo.aadhar}</p>
          <p><strong>Address:</strong> {accountInfo.address}</p>
          <p><strong>Account Balance:</strong> ${accountInfo.balance}</p>
        </div>
      )}
    </div>
  );
};

export default FindSavingAccount;
