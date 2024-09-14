import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/index'; 

function DeleteInvestmentAcc() {
  const { accountNo } = useParams();  
  const [AadharNo, setAadharNo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleAadharChange = (e) => {
    setAadharNo(e.target.value);
  };

  
  const handleDelete = async () => {
    try {
      
      const accountDetails = await api.get(`/api/investment/${accountNo}`);

      if (accountDetails.data.data.AadharNo === AadharNo) {
        
        await api.delete(`/api/investment/${AadharNo}`);
        alert('Account deleted successfully.');
        navigate('/investmentaccounts');  
      } else {
        setError('Aadhar number does not match the account.');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      setError('Error deleting account.');
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete Savings Account</h2>
      <p>To delete the account, please enter the Aadhar number associated with the account.</p>

      {error && <p className="error-text">{error}</p>}

      <div>
        <label>Aadhar Number:</label>
        <input
          type="text"
          value={AadharNo}
          onChange={handleAadharChange}
          placeholder="Enter Aadhar No"
        />
      </div>
      
      <button onClick={handleDelete} className="btn btn-danger">Confirm Delete</button>
    </div>
  );
}

export default DeleteInvestmentAcc;
