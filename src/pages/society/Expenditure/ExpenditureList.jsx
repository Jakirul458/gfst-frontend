import React, { useEffect, useState } from 'react';
import api from '../../../api/index';
import './ExpenditureList.css'; 

const ExpenditureList = () => {
  const [expenditures, setExpenditures] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenditures = async () => {
      try {
        const response = await api.get('/api/expenditure');
        console.log('response', response);     
        setExpenditures(response.data);
        if (response.data.success) {
          setExpenditures(response.data.data); 
          setError(response.data.message);
        } else {
          setError(response.data.message );
        }
      } catch (err) {
        setError('Error fetching expenditure list. Please try again.');
      }
    };

    fetchExpenditures();
  }, []);

  return (
    <div className="expenditure-list-section">
      <h2>Expenditure List</h2>
      {error && <p className="error-message">{error}</p>} {/* Display any error message */}
      {expenditures.length === 0 ? (
        <p>No expenditures found.</p>
      ) : (
        <table className="expenditure-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Details</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {expenditures.map((expenditure, index) => (
              <tr key={index}>
                <td>{new Date(expenditure.expenseDate).toLocaleDateString()}</td>
                <td>{expenditure.expenseDetail}</td>
                <td>₹{expenditure.expenseAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenditureList;
