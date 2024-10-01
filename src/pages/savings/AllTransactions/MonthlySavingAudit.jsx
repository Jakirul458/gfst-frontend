import React, { useEffect, useState } from 'react';
import api from '../../../api/index';
import { Link } from 'react-router-dom';
import { formatMongoDate } from '../../../util/FormatDate';
import './Transaction.css';

function MonthlySavingAudit() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/transaction/all/savings');
        console.log('API Response:', response.data);
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = users;

    // Filter by search query (accountNo, transactionId, remarks)
    if (searchQuery) {
      filtered = filtered.filter((user) =>
        (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by date range
    if (startDate && endDate) {
      filtered = filtered.filter((user) => {
        const userDate = new Date(user.createdAt).setHours(0, 0, 0, 0); // Clear the time component
        const start = new Date(startDate).setHours(0, 0, 0, 0);
        const end = new Date(endDate).setHours(23, 59, 59, 999); // Include the entire end date

        return userDate >= start && userDate <= end;
      });
    }

    setFilteredUsers(filtered);
  }, [searchQuery, startDate, endDate, users]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const printContents = document.getElementById('accounts-table').outerHTML;
    printWindow.document.write(`
      <html>
      <head>
        <title>List of Savings Accounts Transactions</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 4px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        ${printContents}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <div className="print-btn-container">
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
      <h1 className="mb-4">List of Savings Transactions</h1>

      <input
        type="text"
        placeholder="Search by Account No / Transaction ID / Remarks"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4 search-bar"
      />

      <div className="date-filter-container mb-4">
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="form-control date-input"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="form-control date-input"
          placeholder="End Date"
        />
      </div>

      <div id="accounts-table">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Serial No</th>
              <th>Account No</th>
              <th>Transaction ID</th>
              <th>Deposit</th>
              <th>Withdraw</th>
              <th>Remarks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><Link to={`/app/savings/account/${user.accountNo}`}>{user.accountNo}</Link></td>
                  <td>{user.transactionId}</td>
                  <td>{user.typeOfTransaction === 'deposit' ? user.amount : 0}</td>
                  <td>{user.typeOfTransaction === 'withdraw' ? user.amount : 0}</td>
                  <td>{user.remarks}</td>
                  <td>{formatMongoDate(user.createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="print-btn-container">
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>

    </>
  );
}

export default MonthlySavingAudit;
