// import React, { useState } from 'react';
// import api from '../../../api/index';
// import './Withdraw.css';

// const Withdraw = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [transactionid, setTransactionid] = useState('');
//   const [withdraw, setWithdraw] = useState('');
//   const [error, setError] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [accountName, setAccountName] = useState('');
//   const [accountBalance, setAccountBalance] = useState('');
//   const [remarks, setRemarks] = useState('withdraw'); // Default to 'withdraw'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/api/transaction/withdraw', {
//         accountNo: account,
//         amount: withdraw,
//         remarks,
//       });
//       console.log(response.data);
//       if (response.data.success) {
//         alert('Transaction successful!');
//         // Clear form fields after successful submission
//         setAccount('');
//         setDate('');
//         setTransactionid('');
//         setWithdraw('');
//         setRemarks('withdraw');
//         setError(null);
//         setIsVerified(false);
//         setAccountName('');
//         setAccountBalance('');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('An error occurred during the transaction.');
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const response = await api.get(`/api/savings/${account}`);

//       if (response.data.success) {
//         setIsVerified(true);
//         setAccountName(response.data.data.name);
//         setAccountBalance(response.data.data.balance);
//         setError(null);
//       } else {
//         setIsVerified(false);
//         setAccountName('');
//         setAccountBalance('');
//         setError('Account does not exist.');
//       }
//     } catch (err) {
//       setIsVerified(false);
//       setAccountName('');
//       setAccountBalance('');
//       setError('Error verifying account. Please try again.');
//     }
//   };

//   return (
//     <div className="withdraw-container">
//       <form onSubmit={handleSubmit} className="withdraw-form">
//         <h2 className="form-title">Withdraw Funds</h2>
//         {error && <p className="error-message">{error}</p>}

//         <div className="form-group">
//           <label htmlFor="account-number">Account Number</label>
//           <input
//             type="text"
//             id="account-number"
//             className="form-control"
//             placeholder="Enter savings account number"
//             value={account}
//             onChange={(e) => setAccount(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={handleVerify}
//             className="btn verify-btn"
//           >
//             Verify Account
//           </button>
//         </div>

//         {isVerified && (
//           <>
//             <div className="verified-info">
//               <p>
//                 Consumer Name: <strong>{accountName}</strong>
//               </p>
//               <p>
//                 Present Balance: <strong>₹ {accountBalance}</strong>
//               </p>
//             </div>

//             <div className="form-group">
//               <label htmlFor="withdraw-amount">Withdraw Amount (₹)</label>
//               <input
//                 type="number"
//                 id="withdraw-amount"
//                 className="form-control"
//                 placeholder="Enter amount to withdraw"
//                 value={withdraw}
//                 onChange={(e) => setWithdraw(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn submit-btn">
//               Submit Withdrawal
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Withdraw;


// import React, { useState } from 'react';
// import api from '../../../api/index';
// import './Withdraw.css';

// const Withdraw = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState(new Date().toLocaleDateString());
//   const [withdraw, setWithdraw] = useState('');
//   const [error, setError] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [accountName, setAccountName] = useState('');
//   const [accountBalance, setAccountBalance] = useState('');
//   const [remarks, setRemarks] = useState('withdraw'); // Default to 'withdraw'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/api/transaction/withdraw', {
//         accountNo: account,
//         amount: withdraw,
//         remarks,
//       });
//       if (response.data.success) {
//         const newBalance = parseFloat(accountBalance) - parseFloat(withdraw); // Calculate new balance after withdrawal

//         alert('Transaction successful!');
//         // Generate the print slip with updated balance
//         printSlip(accountName, withdraw, newBalance, date);

//         // Clear form fields after successful submission
//         setAccount('');
//         setDate(new Date().toLocaleDateString());
//         setWithdraw('');
//         setRemarks('withdraw');
//         setError(null);
//         setIsVerified(false);
//         setAccountName('');
//         setAccountBalance('');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('An error occurred during the transaction.');
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const response = await api.get(`/api/savings/${account}`);

//       if (response.data.success) {
//         setIsVerified(true);
//         setAccountName(response.data.data.name);
//         setAccountBalance(response.data.data.balance);
//         setError(null);
//       } else {
//         setIsVerified(false);
//         setAccountName('');
//         setAccountBalance('');
//         setError('Account does not exist.');
//       }
//     } catch (err) {
//       setIsVerified(false);
//       setAccountName('');
//       setAccountBalance('');
//       setError('Error verifying account. Please try again.');
//     }
//   };

//   // Function to generate the print slip
//   const printSlip = (consumerName, withdrawAmount, presentBalance, date) => {
//     const slipContent = `
//       <html>
//       <head><title>Withdrawal Slip</title></head>
//       <body>
//         <h1>Youth Supportive Society</h1>
//         <p>Consumer Name: <strong>${consumerName}</strong></p>
//         <p>Withdrawal Amount: <strong>₹ ${withdrawAmount}</strong></p>
//         <p>Available Balance: <strong>₹ ${presentBalance}</strong></p>
//         <p>Date: <strong>${date}</strong></p>
//         <script>
//           window.print();
//         </script>
//       </body>
//       </html>
//     `;
    
//     const newWindow = window.open('', '_blank', 'width=600,height=400');
//     newWindow.document.write(slipContent);
//     newWindow.document.close(); // Close document to make the print window available
//   };

//   return (
//     <div className="withdraw-container">
//       <form onSubmit={handleSubmit} className="withdraw-form">
//         <h2 className="form-title">Withdraw Funds</h2>
//         {error && <p className="error-message">{error}</p>}

//         <div className="form-group">
//           <label htmlFor="account-number">Account Number</label>
//           <input
//             type="text"
//             id="account-number"
//             className="form-control"
//             placeholder="Enter savings account number"
//             value={account}
//             onChange={(e) => setAccount(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={handleVerify}
//             className="btn verify-btn"
//           >
//             Verify Account
//           </button>
//         </div>

//         {isVerified && (
//           <>
//             <div className="verified-info">
//               <p>
//                 Consumer Name: <strong>{accountName}</strong>
//               </p>
//               <p>
//                 Present Balance: <strong>₹ {accountBalance}</strong>
//               </p>
//             </div>

//             <div className="form-group">
//               <label htmlFor="withdraw-amount">Withdraw Amount (₹)</label>
//               <input
//                 type="number"
//                 id="withdraw-amount"
//                 className="form-control"
//                 placeholder="Enter amount to withdraw"
//                 value={withdraw}
//                 onChange={(e) => setWithdraw(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn submit-btn">
//               Submit Withdrawal
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Withdraw;










import React, { useState } from 'react';
import api from '../../../api/index';
import './Withdraw.css';

const Withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [withdraw, setWithdraw] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [remarks, setRemarks] = useState('withdraw'); // Default to 'withdraw'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/withdraw', {
        accountNo: account,
        amount: withdraw,
        remarks,
      });
      if (response.data.success) {
        const newBalance = parseFloat(accountBalance) - parseFloat(withdraw); // Calculate new balance after withdrawal

        alert('Transaction successful!');
        // Generate the print slip with updated balance
        printSlip(accountName, withdraw, newBalance, date);

        // Clear form fields after successful submission
        setAccount('');
        setDate(new Date().toLocaleDateString());
        setWithdraw('');
        setRemarks('withdraw');
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

  // Function to generate the print slip
  const printSlip = (consumerName, withdrawAmount, presentBalance, date) => {
    const slipContent = `
      <html>
      <head><title>Withdrawal Slip</title></head>
      <body>
        <h1>Youth Supportive Society</h1>
        <p>Consumer Name: <strong>${consumerName}</strong></p>
        <p>Withdrawal Amount: <strong>₹ ${withdrawAmount}</strong></p>
        <p>Available Balance: <strong>₹ ${presentBalance}</strong></p>
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
    <div className="centered-container">
      <div className="withdraw-container">
        <form onSubmit={handleSubmit} className="withdraw-form">
          <h2 className="form-title">Withdraw Funds</h2>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="account-number">Account Number</label>
            <input
              type="text"
              id="account-number"
              className="form-control"
              placeholder="Enter savings account number"
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
                  Present Balance: <strong>₹ {accountBalance}</strong>
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="withdraw-amount">Withdraw Amount (₹)</label>
                <input
                  type="number"
                  id="withdraw-amount"
                  className="form-control"
                  placeholder="Enter amount to withdraw"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.target.value)}
                />
              </div>

              <button type="submit" className="btn submit-btn">
                Submit Withdrawal
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
