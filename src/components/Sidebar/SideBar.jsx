// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle, faCoins, faWallet, faListAlt, faSearch, faClipboardList, faMoneyBillWave, faChartLine } from '@fortawesome/free-solid-svg-icons';
// import './SideBar.css'; 

// const SideBar = () => {
//   return (
//     <div className="sidebar">
//       <div className="section">
//         <h2>Saving Account</h2>
//         <nav>
//           <NavLink to='/app/savings/create'>
//             <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//           </NavLink>
//           <NavLink to='/app/savings/deposit'>
//             <FontAwesomeIcon icon={faCoins} /> Deposit
//           </NavLink>
//           <NavLink to='/app/savings/withdraw'>
//             <FontAwesomeIcon icon={faWallet} /> Withdraw
//           </NavLink>
//           <NavLink to='/app/savings/all'>
//             <FontAwesomeIcon icon={faListAlt} /> All Accounts
//           </NavLink>
//           <NavLink to='/app/savings/search-account'>
//             <FontAwesomeIcon icon={faSearch} /> Search Account
//           </NavLink>
//           <NavLink to='/app/savings/audit'>
//             <FontAwesomeIcon icon={faClipboardList} /> Savings Transaction
//           </NavLink>
//         </nav>
//       </div>

//       <div className="section">
//         <h2>Loan Account</h2>
//         <nav>
//           <NavLink to='/app/loan/create'>
//             <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//           </NavLink>
//           <NavLink to='/app/loan/emi'>
//             <FontAwesomeIcon icon={faMoneyBillWave} /> EMI
//           </NavLink>
//           <NavLink to='/app/loan/all'>
//             <FontAwesomeIcon icon={faListAlt} /> Loan Accounts
//           </NavLink>
//           <NavLink to='/app/loan/search-loan-account'>
//             <FontAwesomeIcon icon={faSearch} /> Search Account
//           </NavLink>
//           <NavLink to='/app/loan/audit'>
//             <FontAwesomeIcon icon={faClipboardList} /> Loan Transaction
//           </NavLink>
//         </nav>
//       </div>

//       <div className="section">
//         <h2>Investment</h2>
//         <nav>
//           <NavLink to='/app/investment/create'>
//             <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//           </NavLink>
//           <NavLink to='/app/investment/profit'>
//             <FontAwesomeIcon icon={faChartLine} /> Profit Return
//           </NavLink>
//           <NavLink to='/app/investment/all'>
//             <FontAwesomeIcon icon={faListAlt} /> Investment Accounts
//           </NavLink>
//           <NavLink to='/app/investment/search-investment-account'>
//             <FontAwesomeIcon icon={faSearch} /> Search Account
//           </NavLink>         
//           <NavLink to='/app/investment/audit'>
//             <FontAwesomeIcon icon={faClipboardList} /> Monthly Audit
//           </NavLink>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default SideBar;




// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle, faCoins, faWallet, faListAlt, faSearch, faClipboardList, faMoneyBillWave, faChartLine ,faHandHoldingUsd,faChartPie, faUniversity ,faUsers } from '@fortawesome/free-solid-svg-icons';
// import './SideBar.css';

// const SideBar = () => {
//   const [openSection, setOpenSection] = useState(null);

//   const handleMouseEnter = (section) => {
//     setOpenSection(section);
//   };

//   const handleMouseLeave = () => {
//     setOpenSection(null);
//   };

//   return (
//     <div className="sidebar">
//       {/* Savings Account Section */}
//       <div 
//         className={`section ${openSection === 'savings' ? 'expanded' : ''}`} 
//         onMouseEnter={() => handleMouseEnter('savings')} 
//         onMouseLeave={handleMouseLeave}
//       >
//         <h2> <FontAwesomeIcon icon={faUniversity} /> Savings </h2>
//         {openSection === 'savings' && (
//           <div className="dropdown-content">
//             <NavLink to='/app/savings/create'>
//               <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//             </NavLink>
//             <NavLink to='/app/savings/deposit'>
//               <FontAwesomeIcon icon={faCoins} /> Deposit
//             </NavLink>
//             <NavLink to='/app/savings/withdraw'>
//               <FontAwesomeIcon icon={faWallet} /> Withdraw
//             </NavLink>
//             <NavLink to='/app/savings/all'>
//               <FontAwesomeIcon icon={faListAlt} /> All Accounts
//             </NavLink>
//             <NavLink to='/app/savings/search-account'>
//               <FontAwesomeIcon icon={faSearch} /> Search Account
//             </NavLink>
//             <NavLink to='/app/savings/audit'>
//               <FontAwesomeIcon icon={faClipboardList} /> Savings Transaction
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Loan Account Section */}
//       <div 
//         className={`section ${openSection === 'loan' ? 'expanded' : ''}`} 
//         onMouseEnter={() => handleMouseEnter('loan')} 
//         onMouseLeave={handleMouseLeave}
//       >
//         <h2><FontAwesomeIcon icon={faHandHoldingUsd} /> Loan </h2>
//         {openSection === 'loan' && ( 
//           <div className="dropdown-content">
//             <NavLink to='/app/loan/create'>
//               <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//             </NavLink>
//             <NavLink to='/app/loan/emi'>
//               <FontAwesomeIcon icon={faMoneyBillWave} /> EMI
//             </NavLink>
//             <NavLink to='/app/loan/all'>
//               <FontAwesomeIcon icon={faListAlt} /> Loan Accounts
//             </NavLink>
//             <NavLink to='/app/loan/search-loan-account'>
//               <FontAwesomeIcon icon={faSearch} /> Search Account
//             </NavLink>
//             <NavLink to='/app/loan/audit'>
//               <FontAwesomeIcon icon={faClipboardList} /> Loan Transaction
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Investment Section */}
//       <div 
//         className={`section ${openSection === 'investment' ? 'expanded' : ''}`} 
//         onMouseEnter={() => handleMouseEnter('investment')} 
//         onMouseLeave={handleMouseLeave}
//       >
//         <h2> <FontAwesomeIcon icon={faChartPie} /> Investment</h2>
//         {openSection === 'investment' && (
//           <div className="dropdown-content">
//             <NavLink to='/app/investment/create'>
//               <FontAwesomeIcon icon={faPlusCircle} /> Create Account
//             </NavLink>
//             <NavLink to='/app/investment/profit'>
//               <FontAwesomeIcon icon={faChartLine} /> Profit Return
//             </NavLink>
//             <NavLink to='/app/investment/all'>
//               <FontAwesomeIcon icon={faListAlt} /> Investment Accounts
//             </NavLink>
//             <NavLink to='/app/investment/search-investment-account'>
//               <FontAwesomeIcon icon={faSearch} /> Search Account
//             </NavLink>
//             <NavLink to='/app/investment/audit'>
//               <FontAwesomeIcon icon={faClipboardList} /> Monthly Audit
//             </NavLink>
//           </div>
//         )}
//       </div>
      
//       {/* Society Section */}
//       <div 
//         className={`section ${openSection === 'society' ? 'expanded' : ''}`} 
//         onMouseEnter={() => handleMouseEnter('society')} 
//         onMouseLeave={handleMouseLeave}
//       >
//         <h2> <FontAwesomeIcon icon={faUsers } /> Society</h2>
//         {openSection === 'society' && (
//           <div className="dropdown-content">
//               <NavLink to='/app/society/donation'>
//               <FontAwesomeIcon icon={faChartLine} />Donation
//             </NavLink>
//             <NavLink to='/app/society/expenditure'>
//               <FontAwesomeIcon icon={faPlusCircle} /> Expenditure
//             </NavLink>     
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SideBar;




import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlusCircle, faCoins, faWallet, 
  faListAlt, faSearch, faClipboardList, 
  faMoneyBillWave, faChartLine, faHandHoldingUsd, 
  faChartPie, faUniversity, faUsers 
} from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleMouseEnter = (section) => {
    setOpenSection(section);
  };

  const handleMouseLeave = () => {
    setOpenSection(null);
  };

  return (
    <div className="sidebar">
      {/* Savings Account Section */}
      <div 
        className={`section ${openSection === 'savings' ? 'expanded' : ''}`} 
        onMouseEnter={() => handleMouseEnter('savings')} 
        onMouseLeave={handleMouseLeave}
      >
        <h2> <FontAwesomeIcon icon={faUniversity} /> Savings </h2>
        {openSection === 'savings' && (
          <div className="dropdown-content">
            <NavLink to='/app/savings/create'>
              <FontAwesomeIcon icon={faPlusCircle} /> Create Account
            </NavLink>
            <NavLink to='/app/savings/deposit'>
              <FontAwesomeIcon icon={faCoins} /> Deposit
            </NavLink>
            <NavLink to='/app/savings/withdraw'>
              <FontAwesomeIcon icon={faWallet} /> Withdraw
            </NavLink>
            <NavLink to='/app/savings/all'>
              <FontAwesomeIcon icon={faListAlt} /> All Accounts
            </NavLink>
            <NavLink to='/app/savings/search-account'>
              <FontAwesomeIcon icon={faSearch} /> Search Account
            </NavLink>
            <NavLink to='/app/savings/audit'>
              <FontAwesomeIcon icon={faClipboardList} /> Savings Transaction
            </NavLink>
          </div>
        )}
      </div>

      {/* Loan Account Section */}
      <div 
        className={`section ${openSection === 'loan' ? 'expanded' : ''}`} 
        onMouseEnter={() => handleMouseEnter('loan')} 
        onMouseLeave={handleMouseLeave}
      >
        <h2><FontAwesomeIcon icon={faHandHoldingUsd} /> Loan </h2>
        {openSection === 'loan' && ( 
          <div className="dropdown-content">
            <NavLink to='/app/loan/create'>
              <FontAwesomeIcon icon={faPlusCircle} /> Create Account
            </NavLink>
            <NavLink to='/app/loan/emi'>
              <FontAwesomeIcon icon={faMoneyBillWave} /> EMI
            </NavLink>
            <NavLink to='/app/loan/all'>
              <FontAwesomeIcon icon={faListAlt} /> Loan Accounts
            </NavLink>
            <NavLink to='/app/loan/search-loan-account'>
              <FontAwesomeIcon icon={faSearch} /> Search Account
            </NavLink>
            <NavLink to='/app/loan/audit'>
              <FontAwesomeIcon icon={faClipboardList} /> Loan Transaction
            </NavLink>
          </div>
        )}
      </div>

      {/* Investment Section */}
      <div 
        className={`section ${openSection === 'investment' ? 'expanded' : ''}`} 
        onMouseEnter={() => handleMouseEnter('investment')} 
        onMouseLeave={handleMouseLeave}
      >
        <h2> <FontAwesomeIcon icon={faChartPie} /> Investment</h2>
        {openSection === 'investment' && (
          <div className="dropdown-content">
            <NavLink to='/app/investment/create'>
              <FontAwesomeIcon icon={faPlusCircle} /> Create Account
            </NavLink>
            <NavLink to='/app/investment/profit'>
              <FontAwesomeIcon icon={faChartLine} /> Profit Return
            </NavLink>
            <NavLink to='/app/investment/all'>
              <FontAwesomeIcon icon={faListAlt} /> Investment Accounts
            </NavLink>
            <NavLink to='/app/investment/search-investment-account'>
              <FontAwesomeIcon icon={faSearch} /> Search Account
            </NavLink>
            <NavLink to='/app/investment/audit'>
              <FontAwesomeIcon icon={faClipboardList} /> Monthly Audit
            </NavLink>
          </div>
        )}
      </div>
      
      {/* Society Section */}
      <div 
        className={`section ${openSection === 'society' ? 'expanded' : ''}`} 
        onMouseEnter={() => handleMouseEnter('society')} 
        onMouseLeave={handleMouseLeave}
      >
        <h2> <FontAwesomeIcon icon={faUsers } /> Society</h2>
        {openSection === 'society' && (
          <div className="dropdown-content">
            <NavLink to='/app/society/donation'>
              <FontAwesomeIcon icon={faChartLine} /> Donation
            </NavLink>
            <NavLink to='/app/society/expenditure'>
              <FontAwesomeIcon icon={faPlusCircle} /> Expenditure
            </NavLink>     
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
