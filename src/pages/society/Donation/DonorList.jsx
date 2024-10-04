import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './DonorList.css'; // Custom styles for DonorList component

const DonorList = ({ donations }) => {
  return (
    <div className="donor-list-section">
      <h2><FontAwesomeIcon icon={faUsers} /> Donor List</h2>
      {donations.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <ul className="donor-list">
          {donations.map((donation, index) => (
            <li key={index} className="donor-item">
              <div className="donor-info">
                <p><strong>Donor Name:</strong> {donation.donorName}</p>
                <p><strong>Donation Amount:</strong> ${donation.donationAmount}</p>
                <p><strong>Date:</strong> {donation.donationDate}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonorList;
