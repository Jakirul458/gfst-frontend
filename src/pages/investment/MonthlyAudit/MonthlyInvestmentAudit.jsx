// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../../api';
// import { formatMongoDate } from '../../../util/FormatDate';

// function MonthlyInvestmentAudit() {
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
//         const response = await api.get('/api/transaction/all/investment');
//         console.log('API Response:', response.data.data);
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
//     // if (startDate && endDate) {
//     //   filtered = filtered.filter((user) => {
//     //     const userDate = new Date(user.createdAt).setHours(0, 0, 0, 0); // Clear the time component
//     //     const start = new Date(startDate).setHours(0, 0, 0, 0);
//     //     const end = new Date(endDate).setHours(23, 59, 59, 999); // Include the entire end date

//     //     return userDate >= start && userDate <= end;
//     //   });
//     // }

//     // setFilteredUsers(filtered);
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
//         <title>List of Monthly Investment Transactions</title>
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
//       <h1 className="mb-4">List of Investment Transactions</h1>

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
//               <th>Investment Taken</th>
//               <th>profit</th>      
//               <th>Investment Return</th>
//               <th>Remarks</th>
//               <th>Date</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td><Link to={`/app/investment/account/${user.accountNo}`}>{user.accountNo}</Link></td>
//                 <td>{user.transactionId}</td>
//                 <td>{user.typeOfTransaction === 'investment' ? user.amount : 0}</td>
//                 <td>{user.typeOfTransaction === 'profit' ? user.amount : 0}</td>                
//                 <td>{user.typeOfTransaction === 'closeinvestment' ? user.amount : 0}</td>
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

// export default MonthlyInvestmentAudit;











import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';
import { formatMongoDate } from '../../../util/FormatDate';
import './MonthlyInvestmentAudit.css';

function MonthlyInvestmentAudit() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Default date range (last 31 days)
  const today = new Date().toISOString().split('T')[0];
  const last31Days = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(last31Days);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await api.get('/api/transaction/all/investment');
        
        setUsers(response.data.data);
        setFilteredUsers(response.data.data); // Ensure initial display
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
      filtered = filtered.filter(user =>
        (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by date range
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
      <h1 className="title">List of Investment Transactions</h1>

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
              <th>Investment Taken</th>
              <th>Profit</th>
              {/* <th>Investment Return</th> */}
              <th>Remarks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><Link to={`/app/investment/account/${user.accountNo}`}>{user.accountNo}</Link></td>
                  <td>{user.transactionId}</td>
                  <td>{user.typeOfTransaction === 'investment' ? user.amount : ""}</td>
                  <td>{user.typeOfTransaction === 'profit' ? user.amount : ""}</td>
                  {/* <td>{user.typeOfTransaction === 'closeinvestment' ? user.amount : ""}</td> */}
                  <td>{user.remarks}</td>
                  <td>{formatMongoDate(user.createdAt)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No transactions found</td>
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

export default MonthlyInvestmentAudit;














// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../../api';
// import { formatMongoDate } from '../../../util/FormatDate';
// import './MonthlyInvestmentAudit.css'; // Add CSS file for styling

// function MonthlyInvestmentAudit() {
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Calculate default date range (last 31 days)
//   const today = new Date().toISOString().split('T')[0];
//   const last31Days = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().split('T')[0];

//   const [startDate, setStartDate] = useState(last31Days);
//   const [endDate, setEndDate] = useState(today);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await api.get('/api/transaction/all/investment');
//         console.log('API Response:', response.data.data);
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

//     // Filter by search query
//     if (searchQuery) {
//       filtered = filtered.filter((user) =>
//         (user.accountNo && user.accountNo.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.transactionId && user.transactionId.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.remarks && user.remarks.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//     }

//     setFilteredUsers(filtered);
//   }, [searchQuery, startDate, endDate, users]);

//   const handlePrint = () => {
//     const printWindow = window.open('', '_blank');
//     const printContents = document.getElementById('accounts-table').outerHTML;
//     printWindow.document.write(`
//       <html>
//       <head>
//         <title>List of Monthly Investment Transactions</title>
//         <style>
//           body { font-family: Arial, sans-serif; }
//           table { width: 100%; border-collapse: collapse; margin-top: 20px; }
//           th, td { border: 1px solid black; padding: 6px; text-align: center; }
//           th { background-color: #f4f4f4; }
//           a { text-decoration: none; color: black; }
//         </style>
//       </head>
//       <body>
//         <h2>List of Monthly Investment Transactions</h2>
//         ${printContents}
//       </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div className="audit-container">
//       <h1 className="title">Investment Transactions</h1>

//       {/* Search & Filters */}
//       <div className="filter-container">
//         <input
//           type="text"
//           placeholder="Search by Account No / Transaction ID / Remarks"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="form-control search-input"
//         />
//         <div className="date-filters">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="form-control"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="form-control"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table table-bordered table-hover" id="accounts-table">
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Account No</th>
//               <th>Transaction ID</th>
//               <th>Investment Taken</th>
//               <th>Profit</th>
//               <th>Investment Return</th>
//               <th>Remarks</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td><Link to={`/app/investment/account/${user.accountNo}`}>{user.accountNo}</Link></td>
//                 <td>{user.transactionId}</td>
//                 <td>{user.typeOfTransaction === 'investment' ? user.amount : ""}</td>
//                 <td>{user.typeOfTransaction === 'profit' ? user.amount : ""}</td>
//                 <td>{user.typeOfTransaction === 'closeinvestment' ? user.amount : ""}</td>
//                 {/* <td>{user.typeOfTransaction === 'closeinvestment' ? user.amount : ""}</td> */}
//                 {/* <td>{user.typeOfTransaction && user.typeOfTransaction.toLowerCase() === 'closeinvestment' ? user.amount : ""}</td> */}

    
//                 {/* <td>
//                   {user.typeOfTransaction && user.typeOfTransaction.toLowerCase().includes('closeinvestment')
//                     ? user.amount
//                     : ""}
//                 </td> */}

//                 <td>{user.remarks}</td>
//                 <td>{formatMongoDate(user.createdAt)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Print Button */}
//       <div className="print-btn-container">
//         <button type="button" className="btn print-btn" onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// }

// export default MonthlyInvestmentAudit;
