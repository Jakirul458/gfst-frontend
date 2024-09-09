// import React from 'react'

// function MonthlySavingAudit() {
//   return (
//     <div>Monthly Saving Audit</div>
//   )
// }

// export default MonthlySavingAudit




// import React from 'react';
// // import './MonthlySavingAudit.css';


// function MonthlySavingAudit() {
//   const transactions = [
//     { date: '2023-07-01', transactionId: 'T123', accountNo: '123456789', name: 'Alice Johnson', deposit: '$1000', withdraw:'$0',},
//     { date: '2023-07-02', transactionId: 'T124', accountNo: '987654321', name: 'Bob Smith', deposit: '$0', withdraw:'$1000', },
//     { date: '2023-07-03', transactionId: 'T125', accountNo: '123456780', name: 'Carol White', deposit: '$2000',withdraw:'$0', },
//     // Add more transactions here
//   ];

//   return (
//     <>

//       <h1 className="mb-4">Moonthly Saving Transaction Records</h1>
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
//               <td>{transaction.transactionId}</td>
//               <td>{transaction.accountNo}</td>
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

// export default MonthlySavingAudit;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MonthlySavingAudit() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getSavingTransaction');
        console.log('API Response:', response.data); // Log the API response
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filtered users
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  // Update filtered users when search query or user data changes
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(users); // If search is empty, show all users
    } else {
      const filtered = users.filter((user) => {
        return (
          user.account?.toString().includes(searchQuery) ||
          user.transactionid?.toString().includes(searchQuery) ||
          user.deposit?.toString().includes(searchQuery) ||
          user.withdraw?.toString().includes(searchQuery)
        );
      });
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const printContents = document.getElementById('accounts-table').outerHTML;
    printWindow.document.write(`
      <html>
      <head>
        <title>List of all savings accounts transactions</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
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
      <h1 className="mb-4">List of Savings Transactions</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by Account No, Transaction ID, Deposit, or Withdraw"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4 search-bar"
      />

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
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.account}</td>
                <td>{user.transactionid}</td>
                <td>{user.deposit || 0}</td>
                <td>{user.withdraw || 0}</td>
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

export default MonthlySavingAudit;
