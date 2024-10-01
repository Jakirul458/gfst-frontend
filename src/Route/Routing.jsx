import { createBrowserRouter ,} from "react-router-dom";
import SignIn from "../pages/auth/SignIn/SignIn";
import Dashboard from "../pages/society/Dashboard/Dashboard";
import About from "../pages/society/About/About";
import Contact from "../pages/society/Contact/Contact";
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
import FindInvestmentAccount from "../pages/investment/FindInvestmentAccount/FindInvestmentAccount";
import UpdateInvestmentAcc from "../pages/investment/UpdateAccount/UpdateInvestmentAcc";
import DeleteInvestmentAcc from "../pages/investment/DeleteAccount/DeleteInvestmentAcc";
import InvestmentProfile from '../pages/investment/SingleAccount/InvestmentProfile';
import InvestmentAccounts from "../pages/investment/AllAccounts/InvestmentAccounts";
import Profit from "../pages/investment/Profit/Profit";

import { Navigate } from "react-router-dom";


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
      {
        path: "savings/",
        children: [
          {
            path: "create",
            element: <CreateSavingAccount />,
          },
          {
            path: "deposit",
            element: <Deposit />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "all",
            element: <AllAccounts />,
          },
          {
            path: "search-account",
            element: <SearchAccount />,
          },
          {
            path: "audit",
            element: <MonthlySavingAudit />,
          },
          {
            path: "account/:account",  
            element: <AccountProfile />,
          },
          
          {
            path: "account/update/:accountNo",
            element: <UpdateSavingsAcc />,
          },
          {
            path: "account/delete/:accountNo",
            element: <DeleteSavingsAcc />,
          }
        ],
      },
      {
        path: "loan/",
        children: [
          {
            path: "create",
            element: <CreateLoanAccount />,
          },
          {
            path: "emi",
            element: <LoanInstallment />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "all",
            element: <LoanAccounts />,
          },
          {
            path: "search-account",
            element: <SearchAccount />,
          },
          {
            path: "audit",
            element: <MonthlyLoanAudit />,
          },
          {
            path: "account/:accountNo",  // Changed from :account to :accountNo for consistency
            element: <LoanAccProfile />,
          },
          {
            path: "account/update/:accountNo",
            element: <UpdateLoanAcc />,
          },
          {
            path: "account/delete/:accountNo",
            element: <DeleteLoanAcc />,
          }
        ],
      },
      {
        path: "investment/",
        children: [
          {
            path: "create",
            element: <CreateInvestmentAccount />,
          },
          {
            path: "profit",
            element: <Profit />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "all",
            element: <InvestmentAccounts />,
          },
          {
            path: "find",
            element: <FindInvestmentAccount />,
          },
          {
            path: "audit",
            element: <MonthlyInvestmentAudit />,
          },
          {
            path: "account/:accountNo",  // Changed from :account to :accountNo for consistency
            element: <InvestmentProfile />,
          },
          {
            path: "update/:accountNo",
            element: <UpdateInvestmentAcc />,
          },
          {
            path: "delete/:accountNo",
            element: <DeleteInvestmentAcc />,
          }
        ],
      },
      {
        path: "society/",
        children: [
          {
            path: "adminpanel",
            element: <AdminPanel />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      }
    ],
  },
]);
