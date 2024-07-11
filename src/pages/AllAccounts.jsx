
// import React from 'react'
// import './AllAcounts.css';

// function AllAccounts() {
//     const users = [
//         // Example data
//         { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
//         { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
//         { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
//         { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
//         { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },

//         // Add more users here
//     ];
//     return (
//         <>


//             <h1 className="mb-4">All Savings Accounts</h1>
//             <table className="table table-bordered table-hover">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>Date</th>
//                         <th>Account No</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Mobile No</th>
//                         <th>Aadhar No</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.date}</td>
//                             <td>{user.accountNo}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.mobileNo}</td>
//                             <td>{user.aadharNo}</td>
//                             <td>{user.address}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <div className='print-btn-container'>
//                 <button type="print" className="print-btn">Print</button>
//             </div>
//         </>
//     )
// }

// export default AllAccounts








/*

// src/components/AllAccounts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';

function AllAccounts() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getSavingAccount');
                setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <h1 className="mb-4">All Savings Accounts</h1>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Account No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Aadhar No</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.date}</td>
                            <td>{user.accountNo}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.aadharNo}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='print-btn-container'>
                <button type="print" className="print-btn">Print</button>
            </div>
        </>
    );
}

export default AllAccounts;



*/






/*

// src/components/AllAccounts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';

function AllAccounts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getSavingAccount');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="mb-4">All Savings Accounts</h1>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Account No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Aadhar No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.date}</td>
              <td>{user.accountNo}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobileNo}</td>
              <td>{user.aadharNo}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='print-btn-container'>
        <button type="button" className="print-btn" onClick={() => window.print()}>Print</button>
      </div>
    </>
  );
}

export default AllAccounts;

*/





import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';

function AllAccounts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
          
      try {
        const response = await axios.get('http://localhost:3001/getSavingAccount');
        console.log('API Response:', response.data); // Log the API response
        setUsers(response.data);
      } catch (err) {
         console.error('Error fetching users:', err);
       }
    };

    fetchUsers();
  }, []);

  const handlePrint = () => {
    const printContents = document.getElementById('accounts-table').outerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    // Reload the page to restore the original content
    window.location.reload();
  };

  return (
    <>
      <h1 className="mb-4">All Savings Accounts</h1>
      <div id="accounts-table">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Account No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Aadhar No</th>
              <th>Address</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.date}</td>
                <td>{user.account}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.aadhar}</td>
                <td>{user.address}</td>
                <td>{user.balance}</td>
               
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

export default AllAccounts;







/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AllAccounts.css';

function AllAccounts() {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getSavingAccount');
        console.log('API Response:', response.data); // Log the API response
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (accountNo) => {
    try {
      await axios.delete(`http://localhost:3001/delete-account?accountNo=${accountNo}`);
      setUsers(users.filter(user => user.accountNo !== accountNo));
    } catch (err) {
      console.error('Error deleting account:', err);
    }
  };

  const handleEdit = (user) => {
    setEditMode(user.accountNo);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3001/update-account`, editedUser);
      setUsers(users.map(user => (user.accountNo === editedUser.accountNo ? editedUser : user)));
      setEditMode(null);
    } catch (err) {
      console.error('Error updating account:', err);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    const printContents = document.getElementById('accounts-table').outerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    // Reload the page to restore the original content
    window.location.reload();
  };

  return (
    <>
      <h1 className="mb-4">All Savings Accounts</h1>
      <div id="accounts-table">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Account No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Aadhar No</th>
              <th>Address</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{editMode === user.accountNo ? <input name="date" value={editedUser.date} onChange={handleChange} /> : user.date}</td>
                <td>{editMode === user.accountNo ? <input name="accountNo" value={editedUser.accountNo} onChange={handleChange} /> : user.accountNo}</td>
                <td>{editMode === user.accountNo ? <input name="name" value={editedUser.name} onChange={handleChange} /> : user.name}</td>
                <td>{editMode === user.accountNo ? <input name="email" value={editedUser.email} onChange={handleChange} /> : user.email}</td>
                <td>{editMode === user.accountNo ? <input name="mobileNo" value={editedUser.mobileNo} onChange={handleChange} /> : user.mobileNo}</td>
                <td>{editMode === user.accountNo ? <input name="aadharNo" value={editedUser.aadharNo} onChange={handleChange} /> : user.aadharNo}</td>
                <td>{editMode === user.accountNo ? <input name="address" value={editedUser.address} onChange={handleChange} /> : user.address}</td>
                <td>{editMode === user.accountNo ? <input name="balance" value={editedUser.balance} onChange={handleChange} /> : user.balance}</td>
                <td>
                  {editMode === user.accountNo ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditMode(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(user)}>Edit</button>
                      <button onClick={() => handleDelete(user.accountNo)}>Delete</button>
                    </>
                  )}
                </td>
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

export default AllAccounts;


*/