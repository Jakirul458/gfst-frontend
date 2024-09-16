import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn/SignIn";
import CreateSavingAccount from '../pages/CreateSavingAccount';
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import AllAccounts from "../pages/AllAccounts";
import FindSavaingAccount from "../pages/FindSavaingAccount";
import MonthlySavingAudit from "../pages/MonthlySavingAudit";
import AccountProfile from "../pages/AccountProfile";
import UpdateSavingsAcc from '../pages/UpdateSavingsAcc'
import DeleteSavingsAcc from '../pages/DeleteSavingsAcc'

import CreateLoanAccount from "../pages/CreateLoanAccount";
import LoanInstallment from "../pages/LoanInstallment";
import LoanAccounts from "../pages/LoanAcounts";
import FindLoanAccounts from "../pages/FindLoanAccounts";
import MonthlyLoanAudit from "../pages/MonthlyLoanAudit";
import LoanAccProfile from "../pages/LoanAccProfile";
import UpdateLoanAcc from '../pages/UpdateLoanAcc'

import CreateInvestmentAccount from "../pages/CreateInvestmentAccount";
import InvestmentAccounts from "../pages/InvestmentAccounts";
import FindInvestmentAccount from "../pages/FindInvestmentAccount";
import MonthlyInvestmentAudit from "../pages/MonthlyInvestmentAudit";
import InvestmentProfile from "../pages/InvestmentProfile"
import UpdateInvestmentAcc from '../pages/UpdateInvestmentAcc'
import Profit from '../pages/Profit'


import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Contact from "../pages/Contact";

import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "login",
          element: <SignIn />,
        },
        {
          path : "app/",
          element: <MainLayout />,
          children : [
            {
              path: "savings/",
              children : [
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
                  path: "find",
                  element: <FindSavaingAccount />,
                },
                {
                  path: "audit",
                  element: <MonthlySavingAudit />,
                },
                {
                  path : "account/:account",
                  element : <AccountProfile />
                },
                {
                  path : "account/update/:accountNo",
                  element : <UpdateSavingsAcc />
                },
                {
                  path : "account/delete/:accountNo",
                  element : <DeleteSavingsAcc />
                }
              ]
            },
    
            {
              path: "loan/",
              children : [
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
                  path: "find",
                  element: <FindLoanAccounts />,
                },
                {
                  path: "audit",
                  element: <MonthlyLoanAudit />,
                },
                {
                  path : "account/:account",
                  element : <LoanAccProfile />
                },
                {
                  path : "update/:accountNo",
                  element : <UpdateLoanAcc />
                }
              ]
            },
    
            {
              path: "investment/",
              children : [
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
                  path : "account/:account",
                  element : <InvestmentProfile />
                },
                {
                  path : "update/:accountNo",
                  element : <UpdateInvestmentAcc />
                }
              ]
            },
    
            {
              path: "society/",
              children : [
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
              ]
            }
          ]
        }
      ],
    },
  ])
  