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
        setTotalLoanBalance(response.data.totalLoanBalance);
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


      {/* <div className="section">
        <div className="section-title">Society Total Amount</div>
        <div className="section-content">₹{totalSavingsBalance- Profit}</div>
      </div> */}
      <div className="section">
        <div className="section-title">Total Savings Amount</div>
        <div className="section-content">₹{totalSavingsBalance}</div>
      </div>

      <div className="section">
        <div className="section-title"> Present Savings Amount</div>
        <div className="section-content">₹{totalSavingsBalance - totalLoanBalance}</div> {/* Placeholder value */}
      </div>

      <div className="section">
        <div className="section-title">Total Loan Sanction</div>
        <div className="section-content">₹0</div> {/*sum of loan take (loan)*/}
      </div>

      <div className="section">
        <div className="section-title">Total collect Loan Amount</div>
        <div className="section-content">₹0</div> {/* sum of emi (emmi) */}
      </div>

      <div className="section">
        <div className="section-title">Remaining Loan Amount</div>
        <div className="section-content">₹{totalLoanBalance}</div>
      </div>

      <div className="section">
        <div className="section-title">Total Investment Balance </div>
        <div className="section-content">₹0</div> {/* sum of total investment  balance fiel */}
      </div>

      <div className="section">
        <div className="section-title">Profit Balance</div>
        <div className="section-content">₹0</div> {/* sum of profit (profit) */}
      </div>
    </div>
  );
}

export default Dashboard;
