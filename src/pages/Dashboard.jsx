/*
import React from 'react'

function Home() {
  return (
    <>
      <div><h1>Society Audit</h1></div>
      <div>Society Total Balance</div>
      <div>Society Available Balnce</div>
      <div>Total Loan Balance</div>
      <div>Remaing Total Balance</div>
      <div>Total Investment Balance</div>
      <div>Profit Balance</div>

    </>

  )
}

export default Home

*/


                                            /*edit 2*/

import React from 'react';
import './Dashboard.css';

function Home() {
  return (
    <div className="container">
      <h1 className="header">Society Audit</h1>

      <div className="section">
        <div className="section-title">Society Total Balance</div>
        <div className="section-content">$0</div>
      </div>

      <div className="section">
        <div className="section-title">Society Available Balance</div>
        <div className="section-content">₹0</div>
      </div>

      <div className="section">
        <div className="section-title">Total Loan Balance</div>
        <div className="section-content">₹0</div>
      </div>

      <div className="section">
        <div className="section-title">Remaining Total Balance</div>
        <div className="section-content">₹0</div>
      </div>

      <div className="section">
        <div className="section-title">Total Investment Balance</div>
        <div className="section-content">₹0</div>
      </div>

      <div className="section">
        <div className="section-title">Profit Balance</div>
        <div className="section-content">₹0</div>
      </div>

    </div>
  );
}

export default Home;
