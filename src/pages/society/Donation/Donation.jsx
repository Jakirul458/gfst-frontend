import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faDonate } from '@fortawesome/free-solid-svg-icons';
import './Donation.css'; // You can add custom styles for Donation component

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donations, setDonations] = useState([]);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    
    const newDonation = {
      donorName,
      donationAmount,
      donationDate
    };

    setDonations([...donations, newDonation]);

    // Clear form inputs after submission
    setDonorName('');
    setDonationAmount('');
    setDonationDate('');
  };

  return (
    <div className="donation-section">
      <h2><FontAwesomeIcon icon={faDonate} /> Donation</h2>
      <form onSubmit={handleDonationSubmit}>
        <div>
          <label>Donor Name:</label>
          <input 
            type="text" 
            value={donorName} 
            onChange={(e) => setDonorName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            value={donationAmount} 
            onChange={(e) => setDonationAmount(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={donationDate} 
            onChange={(e) => setDonationDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit"><FontAwesomeIcon icon={faHandHoldingHeart} /> Submit Donation</button>
      </form>

      {/* <div className="donation-list">
        <h3>Recent Donations</h3>
        <ul>
          {donations.map((donation, index) => (
            <li key={index}>
              {donation.donorName} donated ${donation.donationAmount} on {donation.donationDate}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Donation;
