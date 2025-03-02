// import { useState, useEffect } from 'react';
// import './CreateSavingAccountForm.css'; // Ensure this is your CSS file
// import api from '../../../api/index';

// const CreateSavingAccount = () => {
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [AadharNo, setAadharNo] = useState('');
//   const [Address, setAddress] = useState('');
//   const [error, setError] = useState(null);

//   // Set the default date when the component mounts
//   useEffect(() => {
//     const today = new Date();
//     const formattedDate = today.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
//     setDate(formattedDate);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!date || !name || !email || !mobileNo || !AadharNo || !Address) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     const mobileRegex = /^\d{10}$/;
//     if (!mobileRegex.test(mobileNo)) {
//       setError('Mobile number must be exactly 10 digits.');
//       return;
//     }

//     const aadharRegex = /^\d{12}$/;
//     if (!aadharRegex.test(AadharNo)) {
//       setError('Aadhar number must be exactly 12 digits.');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     api.post('/api/savings/create-account', { date, name, email, mobileNo, AadharNo, Address })
//       .then(result => {
//         console.log(result);

//         if (result.data.success) {
//           alert("Account created successfully");
//         } else {
//           alert(result.data.data.message);
//         }

//         setDate('');
//         setName('');
//         setMobileNo('');
//         setAadharNo('');
//         setAddress('');
//         setEmail('');
//         setError(null);
//       })
//       .catch(error => {
//         console.error(error);
//         setError('An error occurred while creating the account.');
//       });
// };


//   return (
//     <div className='update-account-container'>
//       <h2>Create Savings Account</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="date"
//             className="form-control"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Consumer Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Consumer Email ID"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Mobile No</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Consumer Mobile Number"
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Aadhar No</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Consumer Aadhar Number"
//             value={AadharNo}
//             onChange={(e) => setAadharNo(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Consumer Address"
//             value={Address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateSavingAccount;










import { useState, useEffect } from 'react';
import './CreateSavingAccountForm.css'; // Ensure this is your CSS file
import api from '../../../api/index';

const CreateSavingAccount = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [AadharNo, setAadharNo] = useState('');
  const [Address, setAddress] = useState('');
  const [dob, setDob] = useState(''); // Added DOB state
  const [error, setError] = useState(null);

  // Set the default date when the component mounts
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
    setDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !name || !email || !mobileNo || !AadharNo || !Address || !dob) {
      setError('Please fill in all fields.');
      return;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNo)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    const aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(AadharNo)) {
      setError('Aadhar number must be exactly 12 digits.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    api.post('/api/savings/create-account', { date, name, email, mobileNo, AadharNo, Address, dob })
      .then(result => {
        console.log(result);

        if (result.data.success) {
          alert("Account created successfully");
        } else {
          alert(result.data.data.message);
        }

        setDate('');
        setName('');
        setMobileNo('');
        setAadharNo('');
        setAddress('');
        setEmail('');
        setDob('');
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred while creating the account.');
      });
  };

  return (
    <div className='update-account-container'>
      <h2>Create Savings Account</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Consumer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Consumer Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Consumer Mobile Number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Aadhar No</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Consumer Aadhar Number"
            value={AadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Consumer Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateSavingAccount;
