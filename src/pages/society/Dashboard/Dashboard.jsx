// import React, { useEffect, useState } from 'react';
// import api from '../api/index'
// import './Dashboard.css';

// function Dashboard() {
//   const [totalSavingsBalance, setTotalSavingsBalance] = useState(0);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTotalSavingsBalance = async () => {
//       try {
//         // Fetch the total savings balance from your API
//         const response = await api.get('/api/society/total_savings_balance');
        
//         // Assuming your API returns the total balance as `totalBalance`
//         const { totalBalance } = response.data;

//         // Update the state with the fetched balance
//         setTotalSavingsBalance(totalBalance);
//       } catch (err) {
//         console.error('Error fetching total savings balance:', err);
//         setError('Failed to fetch total savings balance');
//       }
//     };

//     fetchTotalSavingsBalance();
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="header">Society Audit</h1>

//       {error && <div className="error-message">{error}</div>}

//       <div className="section">
//         <div className="section-title">Total Savings Balance</div>
//         <div className="section-content">₹{totalSavingsBalance}</div>
//       </div>

//       {/* Placeholder sections for other balances */}
//       <div className="section">
//         <div className="section-title">Available Savings Balance</div>
//         <div className="section-content">₹0</div>
//       </div>

//       <div className="section">
//         <div className="section-title">Total Loan Balance</div>
//         <div className="section-content">₹0</div>
//       </div>

//       <div className="section">
//         <div className="section-title">Remaining Loan Balance</div>
//         <div className="section-content">₹0</div>
//       </div>

//       <div className="section">
//         <div className="section-title">Total Investment Balance</div>
//         <div className="section-content">₹0</div>
//       </div>

//       <div className="section">
//         <div className="section-title">Profit Balance</div>
//         <div className="section-content">₹0</div>
//       </div>

//     </div>
//   );
// }

// export default Dashboard;





import React, { useEffect, useState } from 'react';
import api from '../../../api/index'
import './Dashboard.css';

function Dashboard() {
  const [totalSavingsBalance, setTotalSavingsBalance] = useState(0);
  const [totalLoanBalance, setTotalLoanBalance] = useState(0);
  const [error, setError] = useState('');

  // Fetch total savings balance
  useEffect(() => {
    const fetchTotalSavingsBalance = async () => {
      try {
        const response = await api.get('/api/society/total_savings_balance');
        const { totalBalance } = response.data;
        setTotalSavingsBalance(totalBalance);
      } catch (err) {
        console.error('Error fetching total savings balance:', err);
        setError('Failed to fetch total savings balance');
      }
    };

  const fetchTotalLoanBalance = async () => {
  try {
    const response = await api.get('/api/society/total_loan_balance');
    console.log('Loan API response:', response.data); 
    setTotalLoanBalance(totalLoanAmount);
  } catch (err) {
    console.error('Error fetching total loan balance:', err);
    setError('Failed to fetch total loan balance');
  }
};


    fetchTotalSavingsBalance();
    fetchTotalLoanBalance();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Society Audit</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="section">
        <div className="section-title">Total Savings Balance</div>
        <div className="section-content">₹{totalSavingsBalance}</div>
      </div>

      <div className="section">
        <div className="section-title">Available Savings Balance</div>
        <div className="section-content">₹0</div> {/* Placeholder value */}
      </div>

      <div className="section">
        <div className="section-title">Total Loan Balance</div>
        <div className="section-content">₹{totalLoanBalance}</div>
      </div>

      <div className="section">
        <div className="section-title">Remaining Loan Balance</div>
        <div className="section-content">₹0</div> {/* Placeholder value */}
      </div>

      <div className="section">
        <div className="section-title">Total Investment Balance</div>
        <div className="section-content">₹0</div> {/* Placeholder value */}
      </div>

      <div className="section">
        <div className="section-title">Profit Balance</div>
        <div className="section-content">₹0</div> {/* Placeholder value */}
      </div>
    </div>
  );
}

export default Dashboard;
