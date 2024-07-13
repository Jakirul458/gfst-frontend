// import React from 'react'

// function Deposit() {
//   return (
//     <div>Deposit</div>
//   )
// }

// export default Deposit



                                   /*Edit 1*/

/*
import React, { useState } from 'react';
import './Deposit.css';

const Deposit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
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
        <label>Deposit Amount:</label>
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />
      </div>
     
     
     
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Deposit;

*/



                                /*Edit 2*/

// import React, { useState } from 'react';
// import './Deposit.css';

// const Deposit = () => {
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
//     <> 
    
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
//     </>
//   );
// };

// export default Deposit;

// import React, { useState } from 'react';
// import './Deposit.css';

// const Deposit = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [transactionid, setTransactionid] = useState('');
//   const [deposit, setDeposit] = useState('');
//   const [error, setError] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:3001/deposit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ account, date, transactionid, deposit }),
//       });
//       const result = await response.json();
//       if (result.success) {
//         alert('Deposit successful!');
//         // Clear form fields after successful submission
//         setAccount('');
//         setDate('');
//         setTransactionid('');
//         setDeposit('');
//         setError(null);
//         setIsVerified(false);
//       } else {
//         setError('An error occurred while making the deposit.');
//       }
//     } catch (err) {
//       setError('An error occurred while making the deposit.');
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:3001/verify-account?account=${account}`);
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
//     <>
//       <form onSubmit={handleSubmit} className="account-form">
//         {error && <p className="error">{error}</p>}

//         <div className="form-group">
//           <label>Account No</label>
//           <input
//             type="text"
//             placeholder="Enter Consumer Account Number"
//             value={account}
//             onChange={(e) => setAccount(e.target.value)}
//           />
//           <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
//         </div>

//         {isVerified && (
//           <>
//             <div className="form-group">
//               <label>Date</label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label>Transaction ID</label>
//               <input
//                 type="text"
//                 value={transactionid}
//                 onChange={(e) => setTransactionid(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label>Deposit Amount</label>
//               <input
//                 type="number"
//                 value={deposit}
//                 onChange={(e) => setDeposit(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="submit-btn">Submit</button>
//           </>
//         )}
//       </form>
//     </>
//   );
// };

// export default Deposit;




import React, { useState } from 'react';
import './Deposit.css';

const Deposit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [accountName, setAccountName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3001/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ account, date, transactionid, deposit }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Deposit successful!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setTransactionid('');
        setDeposit('');
        setError(null);
        setIsVerified(false);
        setAccountName('');
      } else {
        setError('An error occurred while making the deposit.');
      }
    } catch (err) {
      setError('An error occurred while making the deposit.');
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
              <label>Deposit Amount</label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default Deposit;
