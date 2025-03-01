// import React, { useState } from 'react'; 
// import api from '../../../api/index';
// import './Deposit.css';

// const Deposit = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState(new Date().toLocaleDateString());
//   const [deposit, setDeposit] = useState('');
//   const [error, setError] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [accountName, setAccountName] = useState('');
//   const [accountBalance, setAccountBalance] = useState('');
//   const [remarks, setRemarks] = useState('deposit'); // Default to 'deposit'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/api/transaction/deposit/', {
//         accountNo: account,
//         amount: deposit,
//         remarks,
//       });
//       if (response.data.success) {
//         const newBalance = parseFloat(accountBalance) + parseFloat(deposit); // Calculate new balance after deposit

//         alert('Transaction successful!');
//         // Generate the print slip with updated balance
//         printSlip(accountName, deposit, newBalance, date);

//         // Clear form fields after successful submission
//         setAccount('');
//         setDate(new Date().toLocaleDateString());
//         setDeposit('');
//         setRemarks('deposit');
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
//   const printSlip = (consumerName, depositAmount, presentBalance, date) => {
//     const slipContent = `
//       <html>
//       <head><title>Deposit Slip</title></head>
//       <body>
//         <h1>Youth Supportive Society</h1>
//         <p>Consumer Name: <strong>${consumerName}</strong></p>
//         <p>Deposit Amount: <strong>₹ ${depositAmount}</strong></p>
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
//     <div className="deposit-container">
//       <form onSubmit={handleSubmit} className="deposit-form">
//         <h2 className="form-title">Deposit Funds</h2>
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
//               <label htmlFor="deposit-amount">Deposit Amount (₹)</label>
//               <input
//                 type="number"
//                 id="deposit-amount"
//                 className="form-control"
//                 placeholder="Enter amount to deposit"
//                 value={deposit}
//                 onChange={(e) => setDeposit(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn submit-btn">
//               Submit Deposit
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Deposit;







import React, { useState } from 'react'; 
import api from '../../../api/index';
import './Deposit.css';

const Deposit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [remarks, setRemarks] = useState('deposit'); // Default to 'deposit'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/transaction/deposit/', {
        accountNo: account,
        amount: deposit,
        remarks,
      });
      if (response.data.success) {
        const newBalance = parseFloat(accountBalance) + parseFloat(deposit); // Calculate new balance after deposit

        alert('Transaction successful!');
        // Generate the print slip with updated balance
        printSlip(accountName, deposit, newBalance, date);

        // Clear form fields after successful submission
        setAccount('');
        setDate(new Date().toLocaleDateString());
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

  // Function to generate the print slip
  const printSlip = (consumerName, depositAmount, presentBalance, date) => {
    const slipContent = `
      <html>
      <head><title>Deposit Slip</title></head>
      <body>
        <h1>Golden Futute Supportive Trust</h1>
        <p>Consumer Name: <strong>${consumerName}</strong></p>
        <p>Deposit Amount: <strong>₹ ${depositAmount}</strong></p>
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
    <div className="form-wrapper">
      <div className="deposit-container">
        <form onSubmit={handleSubmit} className="deposit-form">
          <h2 className="form-title">Deposit Funds</h2>
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
                <label htmlFor="deposit-amount">Deposit Amount (₹)</label>
                <input
                  type="number"
                  id="deposit-amount"
                  className="form-control"
                  placeholder="Enter amount to deposit"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                />
              </div>

              <button type="submit" className="btn submit-btn">
                Submit Deposit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Deposit;
