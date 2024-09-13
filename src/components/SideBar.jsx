import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CreateSavingAccount from '../pages/CreateSavingAccount';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';
import AllAccounts from '../pages/AllAccounts';
import FindSavaingAccount from '../pages/FindSavaingAccount';
import MonthlySavingAudit from '../pages/MonthlySavingAudit';
import CreateLoanAccount from '../pages/CreateLoanAccount';
import LoanInstallment from '../pages/LoanInstallment';
import LoanAcounts from '../pages/LoanAcounts';
import FindLoanAccounts from '../pages/FindLoanAccounts';
import MonthlyLoanAudit from '../pages/MonthlyLoanAudit';
import CloseLoanAccount from '../pages/CloseLoanAccount';
import CreateInvestmentAccount from '../pages/CreateInvestmentAccount';
import Profit from '../pages/Profit';
import MonthlyInvestmentAudit from '../pages/MonthlyInvestmentAudit';
import InvestmentAccounts from '../pages/InvestmentAccounts';
import CloseInvestmentAccount from '../pages/CloseInvestmentAccount';
import FindInvestmentAccount from '../pages/FindInvestmentAccount';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Logout from '../pages/Logout';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import AccountProfile from '../pages/AccountProfile';
import LoanAccProfile from '../pages/LoanAccProfile';
import InvestmentProfile from '../pages/InvestmentProfile';
import UpdateLoanAcc from '../pages/UpdateLoanAcc';
import UpdateInvestmentAcc from '../pages/UpdateInvestmentAcc';
import UpdateSavingsAcc from '../pages/UpdateSavingsAcc';
import './SideBar.css';


function SideBar() {
    return (
        <>
            <div>
                <div className="dashboard">
                    <div className="sidebar">
                        {/* Sidebar links and sections */}
                        <div className="section">
                            <h2>Saving Account</h2>
                            <nav>
                                <NavLink to='/createsavingaccount'>Create Account</NavLink>
                                <NavLink to='/deposit'>Deposit</NavLink>
                                <NavLink to='/withdraw'>Withdraw</NavLink>
                                <NavLink to='/allaccounts'>All Accounts</NavLink>
                                <NavLink to='/findsavingaccount'>Find Saving Accounts</NavLink>
                                <NavLink to='/monthlysavingaudit'>Monthly Audit</NavLink>
                            </nav>
                        </div>

                        <div className="section">
                            <h2>Loan Account</h2>
                            <nav>
                                <NavLink to='/createloanaccount'>Create Account</NavLink>
                                <NavLink to='/loaninstallment'>Loan Installment</NavLink>
                                <NavLink to='/loanaccounts'>Loan Accounts</NavLink>
                                <NavLink to='/findloanaccount'>Find Loan Account</NavLink>
                                <NavLink to='/monthlyloanaudit'>Monthly Audit</NavLink>
                                <NavLink to='/closeloanaccount'>Close Account</NavLink>
                            </nav>
                        </div>

                        <div className="section">
                            <h2>Investment</h2>
                            <nav>
                                <NavLink to='/createinvestmentaccount'>Create Account</NavLink>
                                <NavLink to='/profit'>Profit Return</NavLink>
                                <NavLink to='/findinvestmentaccount'>Find Investment Account</NavLink>
                                <NavLink to='/investmentaccounts'>Investment Accounts</NavLink>
                                <NavLink to='/monthlyinvestmentaudit'>Monthly Audit</NavLink>
                                <NavLink to='/closeinvestmentaccount'>Close Accounts</NavLink>
                            </nav>
                        </div>
                       
                    </div>
                  

                    <div className="content">
                        <Routes>
                            <Route path="/createsavingaccount" element={<CreateSavingAccount />} />
                            <Route path="/deposit" element={<Deposit />} />
                            <Route path="/withdraw" element={<Withdraw />} />
                            <Route path="/allaccounts" element={<AllAccounts />} />
                            <Route path="/findsavingaccount" element={<FindSavaingAccount />} />
                            <Route path="/monthlysavingaudit" element={<MonthlySavingAudit />} />
                            <Route path="/createloanaccount" element={<CreateLoanAccount />} />
                            <Route path="/loaninstallment" element={<LoanInstallment />} />
                            <Route path="/loanaccounts" element={<LoanAcounts />} />
                            <Route path="/findloanaccount" element={<FindLoanAccounts />} />
                            <Route path="/monthlyloanaudit" element={<MonthlyLoanAudit />} />
                            <Route path="/closeloanaccount" element={<CloseLoanAccount />} />
                            <Route path="/createinvestmentaccount" element={<CreateInvestmentAccount />} />
                            <Route path="/profit" element={<Profit />} />
                            <Route path="/monthlyinvestmentaudit" element={<MonthlyInvestmentAudit />} />
                            <Route path="/investmentaccounts" element={<InvestmentAccounts />} />
                            <Route path="/closeinvestmentaccount" element={<CloseInvestmentAccount />} />
                            <Route path="/findinvestmentaccount" element={<FindInvestmentAccount />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/contact" element={<Contact />} />
                            
                            <Route path="/savings/account/:account" element={<AccountProfile />} />
                            <Route path="/loan/account/:account" element={<LoanAccProfile />} />
                            <Route path="/investment/account/:account" element={<InvestmentProfile />} />

                            <Route path="/savings/account/update/:accountNo" element={<UpdateSavingsAcc />} />
                            <Route path="/loan/account/update/:accountNo" element={<UpdateLoanAcc />} />
                            <Route path="/investment/account/update/:accountNo" element={<UpdateInvestmentAcc />} />
                        
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SideBar;
