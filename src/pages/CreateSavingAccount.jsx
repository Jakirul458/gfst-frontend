// import React from 'react'
// import  { useState } from "react";
// import {useAuth}from  '../store/auth';
// import { toast } from 'react-toastify';
// const defaultContactFormData = {
//   date: '',
//   serial_no: '',
//   account_no: '',
//   consumer_name: '',
//   address: '',
//   aadhar_no: '',
//   mobile_no: '',
//   mail_id: '',
//   opening_bal: ''
// };

// function CreateSavingAccount() {


//   const [member, setMember] = useState(defaultContactFormData);
//   const { authorizationToken } = useAuth();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setMember({
//       ...member,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5173/api/admin/admincreateaccount", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: authorizationToken,
//         },
//         body: JSON.stringify(member),
//       });

//       if (response.ok) {
//         setMember(defaultContactFormData);
//         const data = await response.json();
//         console.log(data);
//         toast.success("Account create successfully");
//       }
//     } catch (error) {
//       console.error("Error create account:", error);
//       toast.error("Account not created");
//     }
//   };


//   return (
//     <>
//      <div>Create Account</div>

//      <div>
//       <section>
//         <main>
//           <div className="section-registration">
//             <h1>Create Account</h1>
//             <br/>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="date"> Date</label>
//                 <input 
//                   type="date" 
//                   name="date"
//                   placeholder="Enter your date"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.date}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="serial_number"> Serial Number:</label>
//                 <input 
//                   type="text" 
//                   name="serial_no"
//                   placeholder="Enter the serial number"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.serial_no}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="account_number"> Account Number</label>
//                 <input 
//                   type="text" 
//                   name="account_no"
//                   placeholder="Enter account number"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.account_no}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="name"> Consumer Name</label>
//                 <input 
//                   type="text" 
//                   name="consumer_name"
//                   placeholder="Enter consumer name"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.consumer_name}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="address"> Address</label>
//                 <input 
//                   type="text" 
//                   name="address"
//                   placeholder="Enter your address"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.address}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="number"> Aadhar Number</label>
//                 <input 
//                   type="number" 
//                   name="aadhar_no"
//                   placeholder="Enter your Aadhar number"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.aadhar_no}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone"> Mobile Number</label>
//                 <input 
//                   type="number" 
//                   name="mobile_no"
//                   placeholder="Enter your mobile number"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.mobile_no}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emai"> Gmail id</label>
//                 <input 
//                   type="email" 
//                   name="mail_id"
//                   placeholder="Enter your email address"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.mail_id}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="balance"> Opening balance</label>
//                 <input 
//                   type="text" 
//                   name="opening_bal"
//                   placeholder="Enter opening balance"
//                   id="text"
//                   required 
//                   autoComplete="off"
//                   value={member.opening_bal}
//                   onChange={handleInput}
//                 />
//               </div>
//               <button type="submit">Save</button>
//             </form>
//           </div>
//         </main>
//       </section>
//     </div>
  






//     </>
   
    
//   )
// }
/*
export default CreateSavingAccount


import React from 'react'

function CreateSavingAccount() {
  return (
    <>
    <div>Create Saving Account</div>
    </>
  )
}

export default CreateSavingAccount

*/


                                          /*Edit 2*/



// import React, { useState } from 'react';

// const CreateSavingAccountForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password!== 1234) {
//       setError('Passwords do not match');
//     } else {
//       setError(null);
//       // Handle successful account creation
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <p>{error}</p>}
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//    /
//       <button type="submit">Create Account</button>
//     </form>
//   );
// };

// export default CreateSavingAccountForm;



                                    /*Edit 2*/



/*

import React, { useState } from 'react';
import { json } from 'react-router-dom';

const CreateSavingAccountForm = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <center>
      <label><br/>
        Date :
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Acccount No : 
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Mobile No :
        <input
          type="text"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
      </label>
      <br/><br/>
      <label>
        Aadhar No :
        <input
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Address :
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Opening Balance :
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </label>
      <br/><br/>
      
      <br/>
      <br/>
      <center><button type="submit">Submit</button></center>
      </center>
    </form>
  );
};

export default CreateSavingAccountForm;

*/


                                        /*Edit 4*/



// import React, { useState } from 'react';

// import './CreateSavingAccountForm.css';
// // import axios from 'axios'

// const CreateSavingAccountForm = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [balance, setBalance] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://127.0.0.1:3001/accouns',{account,date,name,mobile,aadhar,address,email,balance})
//     .then (result=>console.log(result))
//     .catch(error=>console.log(error))
//     // Handle successful account creation
//   };

//   return (
//     <form onSubmit={handleSubmit} className="account-form">
//       {error && <p className="error">{error}</p>}
//       <div className="form-group">
//         <label>Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Account No</label>
//         <input
//           type="text"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Name "
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter Consumer Email ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Mobile No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Mobile Number"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Aadhar No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Aadhar Number "
//           value={aadhar}
//           onChange={(e) => setAadhar(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Address</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Address "
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Opening Balance</label>
//         <input
//           type="text"
//           placeholder="Enter Opening Balance "
//           value={balance}
//           onChange={(e) => setBalance(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   );
// };

// export default CreateSavingAccountForm;



// import React, { useState } from 'react';

// import './CreateSavingAccountForm.css';
// import axios from 'axios'

// const CreateSavingAccountForm = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [balance, setBalance] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('http://127.0.0.1:3001/CreateAccont',{account,date,name,mobile,aadhar,address,email,balance})
//     .then (result=>console.log(result))
//     .catch(error=>console.log(error))
//     // Handle successful account creation
//   };

//   return (
//     <form onSubmit={handleSubmit} className="account-form">
//       {error && <p className="error">{error}</p>}
//       <div className="form-group">
//         <label>Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Account No</label>
//         <input
//           type="text"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Name "
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter Consumer Email ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Mobile No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Mobile Number"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Aadhar No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Aadhar Number "
//           value={aadhar}
//           onChange={(e) => setAadhar(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Address</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Address "
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Opening Balance</label>
//         <input
//           type="text"
//           placeholder="Enter Opening Balance "
//           value={balance}
//           onChange={(e) => setBalance(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   );
// };

// export default CreateSavingAccountForm;




// import React, { useState } from 'react';
// import './CreateSavingAccountForm.css';
// import axios from 'axios';

// const CreateSavingAccountForm = () => {
//   const [account, setAccount] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [balance, setBalance] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('http://127.0.0.1:3001/CreateAccount', { account, date, name, mobile, aadhar, address, email, balance })
//       .then(result => console.log(result))
//       .catch(error => {
//         console.error(error);
//         setError('An error occurred while creating the account.');
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="account-form">
//       {error && <p className="error">{error}</p>}
//       <div className="form-group">
//         <label>Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Account No</label>
//         <input
//           type="text"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter Consumer Email ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Mobile No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Mobile Number"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Aadhar No</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Aadhar Number"
//           value={aadhar}
//           onChange={(e) => setAadhar(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Address</label>
//         <input
//           type="text"
//           placeholder="Enter Consumer Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Opening Balance</label>
//         <input
//           type="text"
//           placeholder="Enter Opening Balance"
//           value={balance}
//           onChange={(e) => setBalance(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   );
// };

// export default CreateSavingAccountForm;


import React, { useState } from 'react';
import './CreateSavingAccountForm.css';
import axios from 'axios';

const CreateSavingAccount = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!account || !date || !name || !mobile || !aadhar || !address || !email || !balance) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://127.0.0.1:3001/CreateAccount', { account, date, name, mobile, aadhar, address, email, balance })
      .then(result => {
        console.log(result);
        alert('Account created successfully!');
        // Clear form fields after successful submission
        setAccount('');
        setDate('');
        setName('');
        setMobile('');
        setAadhar('');
        setAddress('');
        setEmail('');
        setBalance('');
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred while creating the account.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Account No</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Consumer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Consumer Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Mobile No</label>
        <input
          type="text"
          placeholder="Enter Consumer Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Aadhar No</label>
        <input
          type="text"
          placeholder="Enter Consumer Aadhar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter Consumer Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Opening Balance</label>
        <input
          type="text"
          placeholder="Enter Opening Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CreateSavingAccount;

