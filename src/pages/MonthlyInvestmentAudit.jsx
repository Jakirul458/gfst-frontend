

// import React from 'react';


// function MonthlyInvestmentAudit() {
//   const transactions = [
//     { date: '2023-07-01', transactionId: 'T123', accountNo: '123456789', name: 'Alice Johnson', deposit: '$1000' , withdraw:'$0',},
//     { date: '2023-07-02', transactionId: 'T124', accountNo: '987654321', name: 'Bob Smith', deposit: '$0' ,withdraw:'$1000',},
//     { date: '2023-07-03', transactionId: 'T125', accountNo: '123456780', name: 'Carol White', deposit: '$2000',withdraw:'$0', },
//     // Add more transactions here
//   ];

//   return (
//     <>
//       <h1 className="mb-4">Moonthly Investment Transaction Records</h1>
//       <table className="table table-bordered table-hover">
//         <thead className="thead-dark">
//           <tr>
//             <th>Serial No</th>
//             <th>Date</th>
//             <th>Transaction ID</th>
//             <th>Account No</th>
//             <th>Name</th>
//             <th>Deposit</th>
//             <th>Withdraw</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{transaction.date}</td>
//               <td><Link to={`/investment/account/${user.accountNo}`}>{user.accountNo}</Link></td>
//               <td>{transaction.transactionId}</td>
//               <td>{transaction.name}</td>
//               <td>{transaction.deposit}</td>
//               <td>{transaction.withdraw}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='print-btn-container'>
//         <button type="print" className="print-btn">Print</button>
//         </div>
//       </>
//   );
// }

// export default MonthlyInvestmentAudit;





import React, { useEffect, useState } from 'react';
import api from '../api/index';
import { Link } from 'react-router-dom';

function MonthlyInvestmentAudit() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/transaction/all/investment');
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

    if (searchQuery) {
      filtered = filtered.filter((user) =>
        (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((user) => {
        const date = new Date(user.date);
        return date >= new Date(startDate) && date <= new Date(endDate);
      });
    }

  
    filtered = filtered.map((user) => ({
      ...user,
      deposit: user.typeOfTransaction === 'deposit' ? user.amount : 0,
      withdraw: user.typeOfTransaction === 'withdraw' ? user.amount : 0,
    }));

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
        <title>List of Monthly Loan Transactions</title>
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
      <h1 className="mb-4">List of Investment Transactions</h1>

      
      <input
        type="text"
        placeholder="Search by Account No, Transaction ID, or Remarks"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4 search-bar"
      />

      
      <div className="mb-4">
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="form-control mb-2"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="form-control"
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
              <th>Profit</th>
              <th>Withdraw</th>
              <th>Remarks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td> 
                <td><Link to={`/investment/account/${user.accountNo}`}>{user.accountNo}</Link></td>           
                <td>{user.transactionId}</td>                           
                <td>{user.deposit}</td>
                <td>{user.withdraw}</td>
                <td>{user.remarks}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="print-btn-container">
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}

export default MonthlyInvestmentAudit;
