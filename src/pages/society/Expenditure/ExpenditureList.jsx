import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import './ExpenditureList.css'; // Add custom styles here

const ExpenditureList = ({ expenses }) => {
  return (
    <div className="expenditure-list-section">
      <h2 className="title"><FontAwesomeIcon icon={faListAlt} /> Expenditure List</h2>
      
      {expenses.length === 0 ? (
        <p>No expenditures yet.</p>
      ) : (
        <ul className="expenditure-list">
          {expenses.map((expense, index) => (
            <li key={index} className="expenditure-item">
              <div className="expenditure-info">
                <p><strong>Expense Detail:</strong> {expense.expenseDetail}</p>
                <p><strong>Amount:</strong> ${expense.expenseAmount}</p>
                <p><strong>Date:</strong> {expense.expenseDate}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenditureList;
