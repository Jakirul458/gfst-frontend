/*
import React from 'react'

function Withdraw() {
  return (
    <div>Withdraw</div>
  )
}

export default Withdraw

*/



/*
import React, { useState } from 'react';
import './Withdraw.css';

const Withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [withdraw, setWithdraw] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Account No:</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Transacion id:</label>
        <input
          type="text"
          value={transactionid}
          onChange={(e) => setTransactionid(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Withdraw Amount:</label>
        <input
          type="number"
          value={withdraw}
          onChange={(e) => setWithdraw(e.target.value)}
        />
      </div>
     
     
     
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Withdraw;

*/



// import React, { useState } from 'react';
// import './Withdraw.css';

// const Withdraw = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [transactionid, setTransactionid] = useState('');
//   const [Withdraw, setWithdraw] = useState('');
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
//             <label>Withdraw Amount</label>
//             <input
//               type="number"
//               value={Withdraw}
//               onChange={(e) => setWithdraw(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="submit-btn">Submit</button>
//         </>
//       )}

      
//     </form>
//   );
// };

// export default Withdraw;




import React, { useState } from 'react';
import './Withdraw.css';

const Withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [Withdraw, setWithdraw] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3001/Withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ account, date, transactionid, Withdraw, remarks }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Withdraw successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setWithdraw('');
        setRemarks('');
        setError(null);
        setIsVerified(false);
        setAccountName('');
      } else {
        setError('An error occurred while making the Withdraw.');
      }
    } catch (err) {
      setError('An error occurred while making the Withdraw.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3001/verify-account?account=${account}`);
      const result = await response.json();

      if (result.exists) {
        setIsVerified(true);
        setAccountName(result.name); // Set the account name
        setError(null);
      } else {
        setIsVerified(false);
        setAccountName(''); // Clear the account name if verification fails
        setError('Account does not exist.');
      }
    } catch (err) {
      setIsVerified(false);
      setAccountName(''); // Clear the account name on error
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="account-form">
        {error && <p className="error">{error}</p>}

        <div className="form-group">
          <label>Account No</label>
          <input
            type="text"
            placeholder="Enter Consumer Account Number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
        </div>

        {isVerified && (
          <>
            <p>Consumer Name {accountName}</p> {/* Display the account name */}

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Transaction ID</label>
              <input
                type="text"
                value={transactionid}
                onChange={(e) => setTransactionid(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Withdraw Amount</label>
              <input
                type="number"
                value={Withdraw}
                onChange={(e) => setWithdraw(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <input
                type="text"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default Withdraw;
