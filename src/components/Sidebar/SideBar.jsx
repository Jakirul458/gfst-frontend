import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
// import CreateSavingAccount from '../../pages/CreateSavingAccount';
// import Deposit from '../../pages/Deposit';
// import Withdraw from '../../pages/Withdraw';
// import AllAccounts from '../../pages/AllAccounts';
// import FindSavaingAccount from '../../pages/FindSavaingAccount';
// import MonthlySavingAudit from '../../pages/MonthlySavingAudit';
// import CreateLoanAccount from '../../pages/CreateLoanAccount';
// import LoanInstallment from '../../pages/LoanInstallment';
// import LoanAcounts from '../../pages/LoanAcounts';
// import FindLoanAccounts from '../../pages/FindLoanAccounts';
// import MonthlyLoanAudit from '../../pages/MonthlyLoanAudit';
// import CreateInvestmentAccount from '../../pages/CreateInvestmentAccount';
// import Profit from '../../pages/Profit';
// import MonthlyInvestmentAudit from '../../pages/MonthlyInvestmentAudit';
// import InvestmentAccounts from '../../pages/InvestmentAccounts';
// import FindInvestmentAccount from '../../pages/FindInvestmentAccount';
// import Dashboard from '../../pages/Dashboard';
// import About from '../../pages/About';
// import Logout from '../../pages/Logout';
// import Login from '../../pages/Login';
// import Contact from '../../pages/Contact';
// import AccountProfile from '../../pages/AccountProfile';
// import LoanAccProfile from '../../pages/LoanAccProfile';
// import InvestmentProfile from '../../pages/InvestmentProfile';
// import UpdateLoanAcc from '../../pages/UpdateLoanAcc';
// import UpdateInvestmentAcc from '../../pages/UpdateInvestmentAcc';
// import UpdateSavingsAcc from '../../pages/UpdateSavingsAcc';
// import DeleteSavingsAcc from '../../pages/DeleteSavingsAcc';
// import DeleteLoanAcc from '../../pages/DeleteLoanAcc';
// import DeleteInvestmentAcc from '../../pages/DeleteInvestmentAcc';
import './SideBar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="section">
                <h2>Saving Account</h2>
                <nav>
                    <NavLink to='/app/savings/create'>Create Account</NavLink>
                    <NavLink to='/app/savings/deposit'>Deposit</NavLink>
                    <NavLink to='/app/savings/withdraw'>Withdraw</NavLink>
                    <NavLink to='/app/savings/all'>All Accounts</NavLink>
                    <NavLink to='/app/savings/find'>Find Saving Accounts</NavLink>
                    <NavLink to='/app/savings/audit'>Savings Transaction</NavLink>
                </nav>
            </div>

            <div className="section">
                <h2>Loan Account</h2>
                <nav>
                    <NavLink to='/app/loan/create'>Create Account</NavLink>
                    <NavLink to='/app/loan/emi'>EMI</NavLink>
                    <NavLink to='/app/loan/all'>Loan Accounts</NavLink>
                    <NavLink to='/app/loan/find'>Find Loan Account</NavLink>
                    <NavLink to='/app/loan/audit'>Loan Transaction</NavLink>
                    
                </nav>
            </div>

            <div className="section">
                <h2>Investment</h2>
                <nav>
                    <NavLink to='/app/investment/create'>Create Account</NavLink>
                    <NavLink to='/app/investment/profit'>Profit Return</NavLink>
                    <NavLink to='/app/investment/find'>Find Investment Account</NavLink>
                    <NavLink to='/app/investment/all'>Investment Accounts</NavLink>
                    <NavLink to='/app/investment/audit'>Monthly Audit</NavLink>
                    
                </nav>
            </div>
            
        </div>
    );
}
export default SideBar;
