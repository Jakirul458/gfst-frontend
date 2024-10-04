// import React, { useState } from 'react';
// import './Profit.css';

// const Profit = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [transactionid, setTransactionid] = useState('');
//   const [deposit, setDeposit] = useState('');
//   const [error, setError] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle successful account creation
//   };

//   const handleVerify = async () => {
//     try {
//       // Replace with your API endpoint
//       const response = await fetch(`https://your-api.com/verify-account?account=${account}`);
//       const result = await response.json();

//       if (result.exists) {
//         setIsVerified(true);
//         setError(null);
//       } else {
//         setIsVerified(false);
//         setError('Account does not exist.');
//       }
//     } catch (err) {
//       setIsVerified(false);
//       setError('Error verifying account. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="account-form">
//       {error && <p className="error">{error}</p>}

//       <div className="form-group">
//         <label>Account No</label>
//         <input
//           type="text"
//           placeholder='Enter Consumer Account Number'
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />
//         <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
//       </div>

//       {isVerified && (
//         <>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Transaction ID</label>
//             <input
//               type="text"
//               value={transactionid}
//               onChange={(e) => setTransactionid(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Deposit Amount</label>
//             <input
//               type="number"
//               value={deposit}
//               onChange={(e) => setDeposit(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="submit-btn">Submit</button>
//         </>
//       )}

      
//     </form>
//   );
// };

// export default Profit;



import React, { useState } from 'react';
import api from '../../../api/index';
import './Profit.css';

const Profit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [remarks, setRemarks] = useState('deposit'); // Default to 'deposit'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/profit/', {
        accountNo: account,
        amount: deposit,
        remarks,
      });
      console.log(response.data);
      if (response.data.success) {
        alert('Transaction successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setDeposit('');
        setRemarks('deposit');
        setError(null);
        setIsVerified(false);
        setAccountName('');
        setAccountBalance('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during the transaction.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await api.get(`/api/savings/${account}`);

      if (response.data.success) {
        setIsVerified(true);
        setAccountName(response.data.data.name);
        setAccountBalance(response.data.data.balance);
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName('');
        setAccountBalance('');
        setError('Account does not exist.');
      }
    } catch (err) {
      setIsVerified(false);
      setAccountName('');
      setAccountBalance('');
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <div className="deposit-container">
      <form onSubmit={handleSubmit} className="deposit-form">
        <h2 className="form-title">Profit</h2>
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
            
            </div>

            <div className="form-group">
              <label htmlFor="deposit-amount">Profit Amount (₹)</label>
              <input
                type="number"
                id="deposit-amount"
                className="form-control"
                placeholder="Enter profit amount"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
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
