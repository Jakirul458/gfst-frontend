import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/index';
import './SearchAccount.css'; // Create appropriate CSS styling for this component

const SearchAccount = () => {
  const [accountNo, setAccountNo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.get(`/api/savings/${accountNo}`);
      if (response.data && response.data.data) {
        // If the account exists, navigate to the account profile page
        navigate(`/app/savings/account/${accountNo}`);
      } else {
        setError('Account not found.');
      }
    } catch (err) {
      setError('Error fetching account details. Please check the account number.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-account-container">
      <h1>Search for a Savings Account</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default SearchAccount;
