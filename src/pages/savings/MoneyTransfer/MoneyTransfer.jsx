import React, { useState } from "react";
import api from '../../../api/index';
import "./MoneyTransfer.css";

const MoneyTransfer = () => {
  const [senderAccount, setSenderAccount] = useState("");
  const [senderVerified, setSenderVerified] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderBalance, setSenderBalance] = useState("");

  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverVerified, setReceiverVerified] = useState(false);
  const [receiverName, setReceiverName] = useState("");

  const [transferAmount, setTransferAmount] = useState("");
  const [error, setError] = useState(null);

  const handleSenderVerify = async () => {
    try {
      const response = await api.get(`/api/savings/${senderAccount}`);
      if (response.data.success) {
        setSenderVerified(true);
        setSenderName(response.data.data.name);
        setSenderBalance(response.data.data.balance);
        setError(null);
      } else {
        setSenderVerified(false);
        setError("Sender account does not exist.");
      }
    } catch (err) {
      setSenderVerified(false);
      setError("Error verifying sender account.");
    }
  };

  const handleReceiverVerify = async () => {
    try {
      const response = await api.get(`/api/savings/${receiverAccount}`);
      if (response.data.success) {
        setReceiverVerified(true);
        setReceiverName(response.data.data.name);
        setError(null);
      } else {
        setReceiverVerified(false);
        setError("Receiver account does not exist.");
      }
    } catch (err) {
      setReceiverVerified(false);
      setError("Error verifying receiver account.");
    }
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (parseFloat(transferAmount) > parseFloat(senderBalance)) {
      setError("Insufficient balance.");
      return;
    }
    try {
      const response = await api.post("/api/transaction/money-transfer", {
        fromAccount: senderAccount,
        toAccount: receiverAccount,
        amount: transferAmount,
      });

      if (response.data.success) {
        alert("Money transferred successfully!");
        setSenderAccount("");
        setReceiverAccount("");
        setTransferAmount("");
        setSenderVerified(false);
        setReceiverVerified(false);
        setSenderName("");
        setSenderBalance("");
        setReceiverName("");
        setError(null);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Error processing transfer.");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="transfer-container">
        <form onSubmit={handleTransfer} className="transfer-form">
          <h2 className="form-title">Money Transfer</h2>
          {error && <p className="error-message">{error}</p>}

          {/* Sender Account Verification */}
          <div className="form-group">
            <label>Sender Account Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter sender account number"
              value={senderAccount}
              onChange={(e) => setSenderAccount(e.target.value)}
            />
            <button type="button" onClick={handleSenderVerify} className="btn verify-btn">
              Verify Sender
            </button>
          </div>

          {senderVerified && (
            <div className="verified-info">
              <p>Sender Name: <strong>{senderName}</strong></p>
              <p>Available Balance: <strong>₹ {senderBalance}</strong></p>
            </div>
          )}

          {/* Receiver Account Verification */}
          {senderVerified && (
            <>
              <div className="form-group">
                <label>Receiver Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter receiver account number"
                  value={receiverAccount}
                  onChange={(e) => setReceiverAccount(e.target.value)}
                />
                <button type="button" onClick={handleReceiverVerify} className="btn verify-btn">
                  Verify Receiver
                </button>
              </div>

              {receiverVerified && (
                <div className="verified-info">
                  <p>Receiver Name: <strong>{receiverName}</strong></p>
                </div>
              )}
            </>
          )}

          {/* Transfer Amount Input */}
          {senderVerified && receiverVerified && (
            <div className="form-group">
              <label>Transfer Amount (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter transfer amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
              <button type="submit" className="btn submit-btn">
                Transfer Money
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MoneyTransfer;
