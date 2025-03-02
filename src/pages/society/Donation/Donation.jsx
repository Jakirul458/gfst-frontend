import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faDonate, faPrint } from '@fortawesome/free-solid-svg-icons';
import api from '../../../api/index'; // Import API instance
import './Donation.css'; // Import styles

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/donation', {
        donorName,
        donationAmount,
        donationDate,
        address,
        mobileNo,
      });

      if (response.data.success) {
        setDonationSubmitted(true);
        setSuccessMessage('Donation successfully submitted!');

        // Reset form fields after successful submission
        setDonorName('');
        setDonationAmount('');
        setDonationDate('');
        setAddress('');
        setMobileNo('');
        setError(null);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setDonationSubmitted(false);
          setSuccessMessage('');
        }, 3000);
      } else {
        setError(response.data.message || 'Failed to submit donation.');
      }
    } catch (err) {
      setError('An error occurred while submitting the donation. Please try again.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="donation-section">
      <h2><FontAwesomeIcon icon={faDonate} /> Donation</h2>

      {!donationSubmitted && (
        <form onSubmit={handleDonationSubmit} className="donation-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={donationDate}
              onChange={(e) => setDonationDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Donor Name:</label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount (₹):</label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            <FontAwesomeIcon icon={faHandHoldingHeart} /> Submit Donation
          </button>
        </form>
      )}

      {successMessage && <p className="success-message">{successMessage}</p>}

      {donationSubmitted && (
        <div className="donation-slip">
          <h3>Donation Receipt</h3>
          <p><strong>Donor Name:</strong> {donorName}</p>
          <p><strong>Donation Amount:</strong> ₹{donationAmount}</p>
          <p><strong>Date:</strong> {donationDate}</p>
          <p><strong>Donor Address:</strong> {address}</p>
          <p><strong>Mobile Number:</strong> {mobileNo}</p>
          <button onClick={handlePrint} className="print-button">
            <FontAwesomeIcon icon={faPrint} /> Print Slip
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
