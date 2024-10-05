
import { useState } from 'react';
import api from '../../../api';
import './LoanInstalment.css';

const LoanInstallment = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [remarks, setRemarks] = useState('loantransaction'); // Default to 'loantransaction'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/emi', {
        accountNo: account,
        amount: deposit,
        remarks,
      });

      if (response.data.success) {
        const remainingLoanAmount = parseFloat(loanAmount) - parseFloat(deposit);

        alert('Transaction successful!');
        printSlip(accountName, deposit, remainingLoanAmount, date);

        setAccount('');
        setDate(new Date().toLocaleDateString());
        setDeposit('');
        setRemarks('loantransaction');
        setError(null);
        setIsVerified(false);
        setAccountName('');
        setLoanAmount('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during the transaction.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await api.get(`/api/loan/${account}`);

      if (response.data.success) {
        setIsVerified(true);
        setAccountName(response.data.data.name);
        setLoanAmount(response.data.data.loanAmount);
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName('');
        setLoanAmount('');
        setError('Account does not exist.');
      }
    } catch (err) {
      setIsVerified(false);
      setAccountName('');
      setLoanAmount('');
      setError('Error verifying account. Please try again.');
    }
  };

  // Function to generate the print slip
  const printSlip = (consumerName, paymentAmount, remainingLoanAmount, date) => {
    const slipContent = `
      <html>
      <head><title>EMI Payment Slip</title></head>
      <body>
        <h1>Youth Supportive Society</h1>
        <p>Consumer Name: <strong>${consumerName}</strong></p>
        <p>EMI Payment Amount: <strong>₹ ${paymentAmount}</strong></p>
        <p>Remaining Loan Amount: <strong>₹ ${remainingLoanAmount}</strong></p>
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
    <div className="loan-transaction-container">
      <form onSubmit={handleSubmit} className="loan-transaction-form">
        <h2 className="form-title">Loan EMI Payment</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="account-number">Loan Account Number</label>
          <input
            type="text"
            id="account-number"
            className="form-control"
            placeholder="Enter loan account number"
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
                Due Loan Amount: <strong>₹ {loanAmount}</strong>
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="deposit-amount">EMI Payment (₹)</label>
              <input
                type="number"
                id="deposit-amount"
                className="form-control"
                placeholder="Enter payment amount"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Submit EMI Payment
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LoanInstallment;
