
// import React, { useState } from 'react';
// import './CreateLoanAccountForm.css';

// const CreateInvestmentAccountForm = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [balance, setBalance] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle successful account creation
//   };

//   return (
//     <form onSubmit={handleSubmit} className="account-form">
//       {error && <p className="error">{error}</p>}
//       <div className="form-group">
//         <label>Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Account No</label>
//         <input
//           type="text"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Name "
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter Consumer Email "
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Mobile No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Mobile No "
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Aadhar No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Aadhar No "
//           value={aadhar}
//           onChange={(e) => setAadhar(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Address</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Address "
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Investment Balance</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Investment Balance "
//           value={balance}
//           onChange={(e) => setBalance(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   );
// };

// export default CreateInvestmentAccountForm;







import React, { useState } from 'react';
import './CreateSavingAccountForm.css';
import axios from 'axios';

const CreateInvestmentAccount = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!account || !date || !name || !mobile || !aadhar || !address || !email || !balance) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://127.0.0.1:3001/CreateInvestmentAccount', { account, date, name, mobile, aadhar, address, email, balance })
      .then(result => {
        console.log(result);
        alert('Account created successfully!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setName('');
        setMobile('');
        setAadhar('');
        setAddress('');
        setEmail('');
        setBalance('');
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred while creating the account.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Account No</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Consumer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Consumer Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Mobile No</label>
        <input
          type="text"
          placeholder="Enter Consumer Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Aadhar No</label>
        <input
          type="text"
          placeholder="Enter Consumer Aadhar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter Consumer Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Opening Balance</label>
        <input
          type="text"
          placeholder="Enter Opening Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CreateInvestmentAccount;



