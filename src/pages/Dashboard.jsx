

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
