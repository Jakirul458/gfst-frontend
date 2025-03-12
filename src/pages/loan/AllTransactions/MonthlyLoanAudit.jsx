
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../../api';
// import './Transactions.css';
// import { formatMongoDate } from '../../../util/FormatDate';

// function MonthlyLoanAudit() {
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Calculate default dates
//   const today = new Date().toISOString().split('T')[0]; // Current date
//   const last31Days = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().split('T')[0]; // 31 days ago

//   // Set default start and end date to the past 31 days
//   const [startDate, setStartDate] = useState(last31Days);
//   const [endDate, setEndDate] = useState(today);

//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await api.get('/api/transaction/all/loan');
//         console.log('API Response:', response.data);
//         setUsers(response.data.data);
//         setFilteredUsers(response.data.data);
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     let filtered = users;

//     // Filter by search query (accountNo, transactionId, remarks)
//     if (searchQuery) {
//       filtered = filtered.filter((user) =>
//         (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//     }

//     // Filter by date range
//     if (startDate && endDate) {
//       filtered = filtered.filter((user) => {
//         const userDate = new Date(user.createdAt).setHours(0, 0, 0, 0); // Clear the time component
//         const start = new Date(startDate).setHours(0, 0, 0, 0);
//         const end = new Date(endDate).setHours(23, 59, 59, 999); // Include the entire end date

//         return userDate >= start && userDate <= end;
//       });
//     }

//     setFilteredUsers(filtered);
//   }, [searchQuery, startDate, endDate, users]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleStartDateChange = (e) => {
//     setStartDate(e.target.value);
//   };

//   const handleEndDateChange = (e) => {
//     setEndDate(e.target.value);
//   };

//   const handlePrint = () => {
//     const printWindow = window.open('', '_blank');
//     const printContents = document.getElementById('accounts-table').outerHTML;
//     printWindow.document.write(`
//       <html>
//       <head>
//         <title>List of Monthly Loan Transactions</title>
//         <style>
//           table { width: 100%; border-collapse: collapse; }
//           th, td { border: 1px solid black; padding: 4px; text-align: center; }
//           th { background-color: #f2f2f2; }
//           a { text-decoration: none; color: black; }
//         </style>
//       </head>
//       <body>
//         ${printContents}
//       </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//     printWindow.close();
//   };

//   return (
//     <>
//       <h1 className="mb-4">List of Loan Transactions</h1>

//       <input
//         type="text"
//         placeholder="Search by Account No / Transaction ID / Remarks"
//         value={searchQuery}
//         onChange={handleSearch}
//         className="form-control mb-4 search-bar"
//       />

//       <div className="mb-4">
//         <input
//           type="date"
//           value={startDate}
//           onChange={handleStartDateChange}
//           className="form-control mb-2"
//           placeholder="Start Date"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={handleEndDateChange}
//           className="form-control"
//           placeholder="End Date"
//         />
//       </div>

//       <div id="accounts-table">
//         <table className="table table-bordered table-hover">
//           <thead className="thead-dark">
//             <tr>
//               <th>Serial No</th>
//               <th>Account No</th>
//               <th>Transaction ID</th>
//               <th>Deposit</th>
//               <th>Withdraw</th>
//               <th>Remarks</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td><Link to={`/app/loan/account/${user.accountNo}`}>{user.accountNo}</Link></td>
//                 <td>{user.transactionId}</td>
//                 <td>{user.typeOfTransaction === 'emi' ? user.amount : 0}</td>
//                 <td>{user.typeOfTransaction === 'loan' ? user.amount : 0}</td>
//                 <td>{user.remarks}</td>
//                 <td>{formatMongoDate(user.createdAt)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="print-btn-container">
//         <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
//       </div>
//     </>
//   );
// }

// export default MonthlyLoanAudit;








import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';
import './Transactions.css';
import { formatMongoDate } from '../../../util/FormatDate';

function MonthlyLoanAudit() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const last31Days = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().split('T')[0];
  
  const [startDate, setStartDate] = useState(last31Days);
  const [endDate, setEndDate] = useState(today);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/transaction/all/loan');
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
      filtered = filtered.filter(user =>
        (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter(user => {
        const userDate = new Date(user.createdAt).setHours(0, 0, 0, 0);
        const start = new Date(startDate).setHours(0, 0, 0, 0);
        const end = new Date(endDate).setHours(23, 59, 59, 999);
        return userDate >= start && userDate <= end;
      });
    }

    setFilteredUsers(filtered);
  }, [searchQuery, startDate, endDate, users]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="audit-container">
      <h1 className="title">List of Loan Transactions</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by Account No / Transaction ID / Remarks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control search-input"
        />
        
        <div className="date-filters">
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control" />
        </div>
      </div>

      <div id="accounts-table" className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><Link to={`/app/loan/account/${user.accountNo}`}>{user.accountNo}</Link></td>
                  <td>{user.transactionId}</td>
                  <td>{user.typeOfTransaction === 'emi' ? user.amount : 0}</td>
                  <td>{user.typeOfTransaction === 'loan' ? user.amount : 0}</td>
                  <td>{user.remarks}</td>
                  <td>{formatMongoDate(user.createdAt)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="print-btn-container">
        <button type="button" className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
}

export default MonthlyLoanAudit;