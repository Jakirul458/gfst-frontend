import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './Expenditure.css'; // You can add custom styles for Expenditure component

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
      expenseDate
    };

    setExpenses([...expenses, newExpense]);

    // Clear form inputs after submission
    setExpenseDetail('');
    setExpenseAmount('');
    setExpenseDate('');
  };

  return (
    <div className="expenditure-section">
      <h2><FontAwesomeIcon icon={faFileInvoiceDollar} /> Expenditure</h2>
      <form onSubmit={handleExpenseSubmit}>
        <div>
          <label>Expense Details:</label>
          <input 
            type="text" 
            value={expenseDetail} 
            onChange={(e) => setExpenseDetail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            value={expenseAmount} 
            onChange={(e) => setExpenseAmount(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={expenseDate} 
            onChange={(e) => setExpenseDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit"><FontAwesomeIcon icon={faMoneyBillWave} /> Submit Expenditure</button>
      </form>

      {/* <div className="expense-list">
        <h3>Recent Expenditures</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.expenseDetail}: ${expense.expenseAmount} on {expense.expenseDate}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Expenditure;
