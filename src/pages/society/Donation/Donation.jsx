import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faDonate, faPrint } from '@fortawesome/free-solid-svg-icons';
import api from '../../../api/index'; // Import your API instance
import './Donation.css'; // Import your custom styles

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

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
        setSuccessMessage('Donation successfully submitted!'); // Show success message

        // Reset form fields after successful submission
        setDonorName('');
        setDonationAmount('');
        setDonationDate('');
        setAddress('');
        setMobileNo('');
        setError(null); // Reset any errors

        // Hide the success message and reopen the form after 3 seconds
        setTimeout(() => {
          setDonationSubmitted(false); // Show the form again
          setSuccessMessage(''); // Hide the success message
        }, 3000);
      } else {
        setError(response.data.message);
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

      {/* Donation form */}
      {!donationSubmitted && (
        <form onSubmit={handleDonationSubmit} className="expense-form">
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
            <label>Amount:</label>
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

      {/* Show highlighted success message */}
      {successMessage && (
        <p className="success-message highlighted">{successMessage}</p> // Highlighted success message
      )}

      {/* Donation slip and print option */}
      {/* {donationSubmitted && (
        <div className="donation-slip">
          <h3>Donation Receipt</h3>
          <p><strong>Donor Name:</strong> {donorName}</p>
          <p><strong>Donation Amount:</strong> ₹{donationAmount}</p>
          <p><strong>Date:</strong> {donationDate}</p>
          <p><strong>Donor Address:</strong> {address}</p>
          <p><strong>Mobile Number:</strong> {mobileNo}</p>
          <button onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /> Print Slip</button>
        </div>
      )} */}
    </div>
  );
};

export default Donation;
