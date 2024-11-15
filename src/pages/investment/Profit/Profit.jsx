
import React, { useState } from 'react'; 
import api from '../../../api/index';
import './Profit.css';

const Profit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [profit, setProfit] = useState(''); // For storing the profit amount
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/profit/', {
        accountNo: account,
        amount: profit,
      });

      if (response.data.success) {
        const newBalance = parseFloat(accountBalance) + parseFloat(profit); // Calculate new balance after profit calculation

        alert('Profit transaction successful!');
        // Generate the print slip with updated balance
        printSlip(accountName, profit, newBalance, date);

        // Clear form fields after successful submission
        setAccount('');
        setDate(new Date().toLocaleDateString());
        setProfit('');
        setError(null);
        setIsVerified(false);
        setAccountName('');
        setAccountBalance('');
        setInvestmentAmount('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during the profit calculation.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await api.get(`/api/investment/${account}`);

      if (response.data.success) {
        setIsVerified(true);
        setAccountName(response.data.data.name);
        setAccountBalance(response.data.data.balance);
        setInvestmentAmount(response.data.data.investmentAmount)
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName('');
        setAccountBalance('');
        setInvestmentAmount('');
        setError('Investment account does not exist.');
      }
    } catch (err) {
      setIsVerified(false);
      setAccountName('');
      setAccountBalance('');
      setInvestmentAmount('');
      setError('Error verifying account. Please try again.');
    }
  };

  // Function to generate the print slip
  const printSlip = (consumerName, profitAmount, investmentAmount, date) => {
    const slipContent = `
      <html>
      <head><title>Profit  Slip</title></head>
      <body>
        <h1>Youth Supportive Society</h1>
        <p>Consumer Name: <strong>${consumerName}</strong></p>
        <p>Profit Amount: <strong>₹ ${profitAmount}</strong></p>
        <p>Investmented Amount: <strong>₹ ${investmentAmount}</strong></p>
        <p>Date: <strong>${date}</strong></p>
        <script>
          window.print();
        </script>
      </body>
      </html>
    `;
    
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    newWindow.document.write(slipContent);
    newWindow.document.close(); // Close document to make the print window available
  };

  return (
    <div className="profit-container">
      <form onSubmit={handleSubmit} className="profit-form">
        <h2 className="form-title"> Profit funds</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            className="form-control"
            placeholder="Enter investment account number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button
            type="button"
            onClick={handleVerify}
            className="btn verify-btn"
          >
            Verify Account
          </button>
        </div>

        {isVerified && (
          <>
            <div className="verified-info">
              <p>
                Consumer Name: <strong>{accountName}</strong>
              </p>
              <p>
                Investmented Amount: <strong>₹ {investmentAmount}</strong>
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="profit-amount">Profit Amount (₹)</label>
              <input
                type="number"
                id="profit-amount"
                className="form-control"
                placeholder="Enter profit amount"
                value={profit}
                onChange={(e) => setProfit(e.target.value)}
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Submit Profit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profit;
