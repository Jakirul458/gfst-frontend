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
// import './AllAccounts.css';

function MonthlySavingAudit() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getSavingTransaction');
        console.log('API Response:', response.data); // Log the API response
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const printContents = document.getElementById('accounts-table').outerHTML;
    printWindow.document.write(`
      <html>
      <head>
        <title> List of all savings accounts transactions </title>
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
      <div id="accounts-table">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Serial No</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Account No</th>
              <th>Name</th>
              <th>Deposit</th>
              <th>Withdraw</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.date}</td>
                <td>{user.TransactionID}</td>
                <td>{user.AccountNo}</td>
                <td>{user.Name}</td>
                <td>{user.Deposit}</td>
                <td>{user.Withdraw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='print-btn-container'>
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}

export default MonthlySavingAudit;

