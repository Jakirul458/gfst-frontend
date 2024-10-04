

import React, { useEffect, useState } from 'react';
import api from '../../../api/index'; // Import your API instance
import './DonorList.css'; // Add your custom styles here

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await api.get('/app/society/donation'); // Adjust this path according to your API
        if (response.data.success) {
          setDonors(response.data.donors); // Assuming the response contains a 'donors' array
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Error fetching donor list. Please try again.');
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="donor-list-section">
      <h2>Donor List</h2>
      {error && <p className="error-message">{error}</p>}
      {donors.length === 0 ? (
        <p>No donors found.</p>
      ) : (
        <table className="donor-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Address</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.donorName}</td>
                <td>₹{donor.donationAmount}</td>
                <td>{donor.donationDate}</td>
                <td>{donor.address}</td>
                <td>{donor.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorList;
