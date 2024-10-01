import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPiggyBank, faWallet, faListAlt, faSearch, faClipboardList, faMoneyBillWave, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'; 

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <h2>Saving Account</h2>
        <nav>
          <NavLink to='/app/savings/create'>
            <FontAwesomeIcon icon={faPlusCircle} /> Create Account
          </NavLink>
          <NavLink to='/app/savings/deposit'>
            <FontAwesomeIcon icon={faPiggyBank} /> Deposit
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
        </nav>
      </div>

      <div className="section">
        <h2>Loan Account</h2>
        <nav>
          <NavLink to='/app/loan/create'>
            <FontAwesomeIcon icon={faPlusCircle} /> Create Account
          </NavLink>
          <NavLink to='/app/loan/emi'>
            <FontAwesomeIcon icon={faMoneyBillWave} /> EMI
          </NavLink>
          <NavLink to='/app/loan/all'>
            <FontAwesomeIcon icon={faListAlt} /> Loan Accounts
          </NavLink>
          <NavLink to='/app/loan/search-account'>
            <FontAwesomeIcon icon={faSearch} /> Search Account
          </NavLink>
          <NavLink to='/app/loan/audit'>
            <FontAwesomeIcon icon={faClipboardList} /> Loan Transaction
          </NavLink>
        </nav>
      </div>

      <div className="section">
        <h2>Investment</h2>
        <nav>
          <NavLink to='/app/investment/create'>
            <FontAwesomeIcon icon={faPlusCircle} /> Create Account
          </NavLink>
          <NavLink to='/app/investment/profit'>
            <FontAwesomeIcon icon={faChartLine} /> Profit Return
          </NavLink>
          <NavLink to='/app/investment/find'>
            <FontAwesomeIcon icon={faSearch} /> Find Investment Account
          </NavLink>
          <NavLink to='/app/investment/all'>
            <FontAwesomeIcon icon={faListAlt} /> Investment Accounts
          </NavLink>
          <NavLink to='/app/investment/audit'>
            <FontAwesomeIcon icon={faClipboardList} /> Monthly Audit
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
