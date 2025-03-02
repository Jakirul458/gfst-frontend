import React, { useEffect, useState } from 'react';
import api from '../../../api/index'; // Import your API instance
import './DonorList.css'; // Import the updated styles

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await api.get('/api/donation');
        console.log('response', response);
        if (response.data.success) {
          setDonors(response.data.data);
          setError(null);
        } else {
          setError(response.data.message || 'Failed to load donations.');
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
              <th>Address</th>
              <th>Mobile No</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.donorName}</td>
                <td>{donor.donorAddress}</td>
                <td>{donor.donorMobileNo}</td>
                <td>₹{donor.donationAmount}</td>
                <td>{donor.donationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorList;
