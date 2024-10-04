import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './Expenditure.css';

const Expenditure = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDetail, setExpenseDetail] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      expenseDetail,
      expenseAmount,
      expenseDate,
    };

    setExpenses([...expenses, newExpense]);

    // Clear form inputs after submission
    setExpenseDetail('');
    setExpenseAmount('');
    setExpenseDate('');
  };

  return (
    <div className="expenditure-section">
      <h2 className="title"><FontAwesomeIcon icon={faFileInvoiceDollar} /> Expenditure</h2>
      
      <form onSubmit={handleExpenseSubmit} className="expense-form">
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
