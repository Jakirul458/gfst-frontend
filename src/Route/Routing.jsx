import { createBrowserRouter ,} from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignIn from "../pages/auth/SignIn/SignIn";
import MainLayout from '../layout/MainLayout';
import AdminPanel from '../pages/society/Admin/AdminPanel' 
//savings
import CreateSavingAccount from "../pages/savings/CreateAccount/CreateSavingAccount";
import Deposit from "../pages/savings/Deposit/Deposit";
import Withdraw from "../pages/savings/Withdraw/Withdraw";
import AllAccounts from "../pages/savings/AllAccounts/AllAccounts";
import DeleteSavingsAcc from "../pages/savings/DeleteSavingsAccount/DeleteSavingsAcc";
import UpdateSavingsAcc from "../pages/savings/UpdateSavingsAccount/UpdateSavingsAcc";
import MonthlySavingAudit from "../pages/savings/AllTransactions/MonthlySavingAudit";
import AccountProfile from '../pages/savings/SingleAccount/AccountProfile'
import SearchAccount from "../pages/savings/SearchAccount/SearchAccount";
//loan
import CreateLoanAccount from "../pages/loan/CreateAccount/CreateLoanAccount";
import LoanInstallment from "../pages/loan/Installment/LoanInstallment";
import MonthlyLoanAudit from "../pages/loan/AllTransactions/MonthlyLoanAudit";
import SearchLoanAccount from "../pages/loan/SearchAccount/SearchLoanAccount";
import UpdateLoanAcc from "../pages/loan/UpdateLoanAccount/UpdateLoanAcc";
import DeleteLoanAcc from "../pages/loan/DeleteLoanAccount/DeleteLoanAcc";
import LoanAccProfile from '../pages/loan/SingleAccount/LoanAccProfile';
import LoanAccounts from "../pages/loan/AllAccounts/LoanAcounts";
//investment
import CreateInvestmentAccount from "../pages/investment/CreateAccount/CreateInvestmentAccount";
import MonthlyInvestmentAudit from "../pages/investment/MonthlyAudit/MonthlyInvestmentAudit";
import SearchInvestmentAccount from "../pages/investment/SearchInvestmentAccount/SearchInvestmentAccount";
import DeleteInvestmentAcc from "../pages/investment/DeleteInvestmentAccount/DeleteInvestmentAcc";
import UpdateInvestmentAcc from "../pages/investment/UpdateInvestmentAccount/UpdateInvestmentAcc";
import InvestmentProfile from '../pages/investment/SingleAccount/InvestmentProfile';
import InvestmentAccounts from "../pages/investment/AllAccounts/InvestmentAccounts";
import Profit from "../pages/investment/Profit/Profit";
//Society
import Dashboard from "../pages/society/Dashboard/Dashboard";
import About from "../pages/society/About/About";
import Contact from "../pages/society/Contact/Contact";
import Donation from "../pages/society/Donation/Donation";
import Expenditure from "../pages/society/Expenditure/Expenditure";
import DonorList from "../pages/society/Donation/DonorList";
import ExpenditureList from "../pages/society/Expenditure/ExpenditureList";
import CloseInvestmentAcc from "../pages/investment/CloseInvestmentAcc/CloseInvestmentAcc";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "app/",
    element: <MainLayout />,
    children: [
      // Savings routes
      {
        path: "savings/",
        children: [
          { path: "create", element: <CreateSavingAccount /> },
          { path: "deposit", element: <Deposit /> },
          { path: "withdraw", element: <Withdraw /> },
          { path: "all", element: <AllAccounts /> },
          { path: "search-account", element: <SearchAccount /> },
          { path: "audit", element: <MonthlySavingAudit /> },
          { path: "account/:accountNo", element: <AccountProfile /> }, 
          { path: "account/update/:accountNo", element: <UpdateSavingsAcc /> },
          { path: "account/delete/:accountNo", element: <DeleteSavingsAcc /> },
        ],
      },
      // Loan routes
      {
        path: "loan/",
        children: [
          { path: "create", element: <CreateLoanAccount /> },
          { path: "emi", element: <LoanInstallment /> },
          { path: "withdraw", element: <Withdraw /> },
          { path: "all", element: <LoanAccounts /> },
          { path: "search-loan-account", element: <SearchLoanAccount /> },
          { path: "audit", element: <MonthlyLoanAudit /> },
          { path: "account/:accountNo", element: <LoanAccProfile /> },
          { path: "account/update/:accountNo", element: <UpdateLoanAcc /> },
          { path: "account/delete/:accountNo", element: <DeleteLoanAcc /> },
        ],
      },
      // Investment routes
      {
        path: "investment/",
        children: [
          { path: "create", element: <CreateInvestmentAccount /> },
          { path: "profit", element: <Profit /> },
          { path: "withdraw", element: <Withdraw /> },
          { path: "all", element: <InvestmentAccounts /> },
          { path: "search-investment-account", element: <SearchInvestmentAccount /> },
          { path: "audit", element: <MonthlyInvestmentAudit /> },
          { path: "account/:accountNo", element: <InvestmentProfile /> }, 
          { path: "account/update/:accountNo", element: <UpdateInvestmentAcc /> },
          { path: "account/delete/:accountNo", element: <DeleteInvestmentAcc /> },
          {path:"close-investment",element:<CloseInvestmentAcc />}
        ],
      },
      // Society routes
      {
        path: "society/",
        children: [
          { path: "adminpanel", element: <AdminPanel /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "donation", element: <Donation /> },
          { path: "donor-list", element: <DonorList /> },
          { path: "expenditure", element: <Expenditure /> },
          { path: "expenditure-list", element: <ExpenditureList /> },
        ],
      },
    ],
  },
]);
