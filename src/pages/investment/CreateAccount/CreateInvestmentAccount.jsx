import React, { useState } from 'react';
import './CreateInvestmentAccountForm.css';
import api from '../../../api';

const CreateInvestmentAccount = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [AadharNo, setAadharNo] = useState('');
  const [Address, setAddress] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!date || !name || !email || !mobileNo || !AadharNo || !Address  || !investmentAmount) {
      setError('Please fill in all fields.');
      return;
    }

    api.post('/api/investment/create-account', { date, name,email, mobileNo, AadharNo, Address,  investmentAmount })
      .then(result => {
        console.log(result);
        alert('Account created successfully!');
        // Clear form fields after successful submission
        setDate('');
        setName('');
        setMobileNo('');
        setAadharNo('');
        setAddress('');
        setEmail('');
        setInvestmentAmount('');
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
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Aadhar No</label>
        <input
          type="text"
          placeholder="Enter Consumer Aadhar Number"
          value={AadharNo}
          onChange={(e) => setAadharNo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter Consumer Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Investment Amount</label>
        <input
          type="text"
          placeholder="Enter Opening Balance"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CreateInvestmentAccount;
