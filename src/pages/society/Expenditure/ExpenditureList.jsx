import React, { useEffect, useState } from 'react';
import api from '../../../api/index'; 
import './ExpenditureList.css'; 

const ExpenditureList = () => {
  const [expenditures, setExpenditures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenditures = async () => {
      try {
        const response = await api.get('/app/society/expenditure');
        if (response.data.success) {
          setExpenditures(response.data.data); 
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('An error occurred while fetching expenditures.');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenditures();
  }, []);

  if (loading) {
    return <p>Loading expenditures...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="expenditure-list">
      <h2>Expenditure List</h2>
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
                <td>{expenditure.expenseDate}</td>
                <td>{expenditure.expenseDetail}</td>
                <td>{expenditure.expenseAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenditureList;

