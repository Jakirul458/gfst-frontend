import React, { useEffect, useState } from 'react';
import api from '../../../api/index';
import './Dashboard.css';

function Dashboard() {
  const [totalSavingsBalance, setTotalSavingsBalance] = useState(0);
  const [totalLoanBalance, setTotalLoanBalance] = useState(0);
  const [error, setError] = useState('');

  // Fetch total savings and loan balances
  useEffect(() => {
    const fetchTotalBalances = async () => {
      try {
        const savingsResponse = await api.get('/api/society/total_savings_balance');
        setTotalSavingsBalance(savingsResponse.data.totalBalance);

        const loanResponse = await api.get('/api/society/total_loan_balance');
        setTotalLoanBalance(loanResponse.data.totalLoanBalance);
      } catch (err) {
        console.error('Error fetching balances:', err);
        setError('Failed to fetch balances');
      }
    };

    fetchTotalBalances();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Youth Supportive Society <br /> Audit</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="cards-container">
      <div className="card">
          <div className="card-title"> Society total amount</div>
          <div className="card-content">₹{/*totalSavingsBalance + totalProfit + totalDonation*/}</div>
        </div>
        <div className="card">
          <div className="card-title">Society Present amount</div>
          <div className="card-content">₹{/*(totalSavingsBalance + totalProfit + totalDonation) -totalExpenditure*/}</div>
        </div>
        <div className="card">
          <div className="card-title"> Savings total amount</div>
          <div className="card-content">₹{totalSavingsBalance}</div>
        </div>

        <div className="card">
          <div className="card-title">Savings present amount</div>
          <div className="card-content">₹{totalSavingsBalance - totalLoanBalance}</div>
        </div>

        <div className="card">
          <div className="card-title">Total loan sanction </div>
          <div className="card-content">₹{/*totalLoan*/}</div>
        </div>

        <div className="card">
          <div className="card-title"> Collected total loan amount</div>
          <div className="card-content">₹{/*total-emi*/}</div>
        </div>

        <div className="card">
          <div className="card-title">Remaining loan amount</div>
          <div className="card-content">₹{totalLoanBalance}</div>
        </div>

        <div className="card">
          <div className="card-title"> Investment total amount</div>
          <div className="card-content">₹{/*totalInvestmentAmount*/}</div>
        </div>

        <div className="card">
          <div className="card-title">Profit amount</div>
          <div className="card-content">₹{/*totalProfit*/}</div>
        </div>
        <div className="card">
          <div className="card-title">Total Donation Amount</div>
          <div className="card-content">₹{/*totalDonation*/}</div>
        </div> 
        <div className="card">
          <div className="card-title">Total Expenditure</div>
          <div className="card-content">₹{/*totalExpenditure*/}</div>
        </div>             
      </div>
    </div>
  );
}

export default Dashboard;
