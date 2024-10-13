import { useEffect, useState } from 'react';
import api from '../../../api/index';
import './Dashboard.css';

function Dashboard() {
  const [totalSavingsBalance, setTotalSavingsBalance] = useState(0);
  const [totalLoanBalance, setTotalLoanBalance] = useState(0);
  const [donationBalance, setTotalDonationBalance] = useState(0);
  const [investmentBalance, setTotalInvestmentBalance] = useState(0);
  const [expenditureBalance, setTotalExpenditure] = useState(0);
  const [profitBalance, setTotalProfit] = useState(0);
  const [totalEmi, setTotalEmi] = useState(0);
  const [error, setError] = useState('');

  // Fetch total savings and loan balances
  useEffect(() => {
    const fetchTotalBalances = async () => {
      try {
        const savingsResponse = await api.get('/api/society/total_savings_balance');
        setTotalSavingsBalance(savingsResponse.data.totalBalance);

        const loanResponse = await api.get('/api/society/total_loan_balance');
        setTotalLoanBalance(loanResponse.data.totalLoanBalance);

        const donationResponse = await api.get('/api/society/total_donation_balance');
        setTotalDonationBalance(donationResponse.data.donationAmount)

        const investmentResponse = await api.get('/api/society/total_investment');
        setTotalInvestmentBalance(investmentResponse.data.investmentAmount)
        
        const profitResponse= await api.get('/api/society/total_society_profit');
        setTotalProfit(profitResponse.data.totalProfit)

        const expenditureResponse = await api.get('/api/society/total_society_expenditure');
        setTotalExpenditure(expenditureResponse.data.expenseAmount);

        const emiResponse = await api.get('/api/society/total_society_emi');
        setTotalEmi(emiResponse.data.totalEmi);

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
          <div className="card-content">₹{totalSavingsBalance + profitBalance + donationBalance}</div>
        </div>
        <div className="card">
          <div className="card-title">Society Present amount</div>
          <div className="card-content">₹{(totalSavingsBalance + profitBalance + donationBalance) -expenditureBalance}</div>
        </div>
        <div className="card">
          <div className="card-title"> Savings total amount</div>
          <div className="card-content">₹{totalSavingsBalance}</div>
        </div>

        <div className="card">
          <div className="card-title">Savings present amount</div>
          <div className="card-content">₹{(totalSavingsBalance - totalLoanBalance)-investmentBalance}</div>
        </div>

{/*         <div className="card">
          <div className="card-title">Total loan sanction </div>
          <div className="card-content">₹{totalLoanBalance}</div>
        </div> */}

            <div className="card">
          <div className="card-title">  Total loan amount</div>
          <div className="card-content">₹{totalEmi+totalLoanBalance}</div>
        </div>

        <div className="card">
          <div className="card-title"> Collected total loan amount</div>
          <div className="card-content">₹{totalEmi}</div>
        </div>

        <div className="card">
          <div className="card-title">Remaining loan amount</div>
          <div className="card-content">₹{totalLoanBalance - totalEmi}</div>
        </div>

        <div className="card">
          <div className="card-title"> Investment total amount</div>
          <div className="card-content">₹{investmentBalance}</div>
        </div>

        <div className="card">
          <div className="card-title">Profit amount</div>
          <div className="card-content">₹{profitBalance}</div>
        </div>
        <div className="card">
          <div className="card-title">Total Donation Amount</div>
          <div className="card-content">₹{donationBalance}</div>
        </div> 
        <div className="card">
          <div className="card-title">Total Expenditure</div>
          <div className="card-content">₹{expenditureBalance}</div>
        </div>             
      </div>
    </div>
  );
}

export default Dashboard;
