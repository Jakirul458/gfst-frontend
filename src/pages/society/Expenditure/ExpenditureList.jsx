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
        const response = await api.get('/api/expenditure');
        console.log('API Response:', response); // Log the entire response

        if (response.data.success) {
          setExpenditures(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error('Error fetching expenditures:', err); // Log the error
        setError('An error occurred while fetching expenditures.');
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    };

    fetchExpenditures();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state while fetching
  }

  return (
    <div className="expenditure-list">
      <h2>Expenditure List</h2>
      {error && <p>{error}</p>} {/* Display any error message */}
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
