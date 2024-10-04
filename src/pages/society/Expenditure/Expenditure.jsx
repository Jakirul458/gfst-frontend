

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import api from '../../../api/index'; // Adjust the path according to your project structure
import './Expenditure.css';

const Expenditure = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDetail, setExpenseDetail] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleExpenseSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      expenseDetail,
      expenseAmount: parseFloat(expenseAmount), // Ensure the amount is a number
      expenseDate,
    };

    try {
      const response = await api.post('/api/expenditure');

      if (response.data.success) {
        setExpenses([...expenses, newExpense]);
        setSuccessMessage('Expenditure submitted successfully!');

        // Clear form inputs after submission
        setExpenseDetail('');
        setExpenseAmount('');
        setExpenseDate('');
        setError(null);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred while submitting the expenditure.');
    }
  };

  return (
    <div className="expenditure-section">
      <h2 className="title"><FontAwesomeIcon icon={faFileInvoiceDollar} /> Expenditure</h2>
      
      <form onSubmit={handleExpenseSubmit} className="expense-form">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group">
          <label htmlFor="expenseDetail">Expense Details</label>
          <input 
            id="expenseDetail"
            type="text" 
            value={expenseDetail} 
            onChange={(e) => setExpenseDetail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="expenseAmount">Amount</label>
          <input 
            id="expenseAmount"
            type="number" 
            value={expenseAmount} 
            onChange={(e) => setExpenseAmount(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="expenseDate">Date</label>
          <input 
            id="expenseDate"
            type="date" 
            value={expenseDate} 
            onChange={(e) => setExpenseDate(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="submit-button">
          <FontAwesomeIcon icon={faMoneyBillWave} /> Submit Expenditure
        </button>
      </form>
    </div>
  );
};

export default Expenditure;
