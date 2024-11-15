import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/index';
import './SearchInvestmentAccount.css'; 

const SearchLoanAccount = () => {
  const [accountNo, setAccountNo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.get(`/api/investment/${accountNo}`);
      if (response.data && response.data.data) {
        // If the account exists, navigate to the account profile page
        navigate(`/app/investment/account/${accountNo}`);
      } else {
        setError('Account not found.');
      }
    } catch (err) {
      setError('Error fetching account details. Please check the account number.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-account-container">
      <h1>Search for a Investment Account</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default SearchLoanAccount;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../../api/index';
// import './SearchInvestmentAccount.css';

// const SearchLoanAccount = () => {
//   const [accountNo, setAccountNo] = useState('');
//   const [aadharNo, setAadharNo] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       let response;
//       if (accountNo) {
//         response = await api.get(`/api/investment/${accountNo}`);
//       } else if (aadharNo) {
//         response = await api.get(`/api/investment/${aadharNo}`);
//       } else {
//         setError('Please enter an Account Number or Aadhar Number.');
//         setLoading(false);
//         return;
//       }

//       if (response.data && response.data.data) {
//         // Navigate to the account profile page if found
//         navigate(`/app/investment/account/${response.data.data.accountNo}`);
//       } else {
//         setError('Account not found.');
//       }
//     } catch (err) {
//       setError('Error fetching account details. Please check the entered details.');
//       console.error('API Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-account-container">
//       <h1>Search for an Investment Account</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Enter Account Number"
//           value={accountNo}
//           onChange={(e) => setAccountNo(e.target.value)}
//           className="form-control"
//         />
//         <span>OR</span>
//         <input
//           type="text"
//           placeholder="Enter Aadhar Number"
//           value={aadharNo}
//           onChange={(e) => setAadharNo(e.target.value)}
//           className="form-control"
//         />
//         <button onClick={handleSearch} className="btn btn-primary" disabled={loading}>
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </div>
      
//       {error && <p className="error-text">{error}</p>}
//     </div>
//   );
// };

// export default SearchLoanAccount;


