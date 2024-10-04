// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandHoldingHeart, faDonate } from '@fortawesome/free-solid-svg-icons';
// import './Donation.css'; // You can add custom styles for Donation component

// const Donation = () => {
//   const [donationAmount, setDonationAmount] = useState('');
//   const [donorName, setDonorName] = useState('');
//   const [address, setAddress] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [donationDate, setDonationDate] = useState('');
//   const [donations, setDonations] = useState([]);

//   const handleDonationSubmit = (e) => {
//     e.preventDefault();
    
//     const newDonation = {
//       donorName,
//       donationAmount,
//       donationDate
//     };

//     setDonations([...donations, newDonation]);

//     // Clear form inputs after submission
//     setDonorName('');
//     setDonationAmount('');
//     setDonationDate('');
//   };

//   return (
//     <div className="donation-section">
//       <h2><FontAwesomeIcon icon={faDonate} /> Donation</h2>
//       <form onSubmit={handleDonationSubmit}>
//       <div>
//           <label>Date:</label>
//           <input 
//             type="date" 
//             value={donationDate} 
//             onChange={(e) => setDonationDate(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Donor Name:</label>
//           <input 
//             type="text" 
//             value={donorName} 
//             onChange={(e) => setDonorName(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Amount:</label>
//           <input 
//             type="number" 
//             value={donationAmount} 
//             onChange={(e) => setDonationAmount(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input 
//             type="text" 
//             value={address} 
//             onChange={(e) => setAddress(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Mobile Number:</label>
//           <input 
//             type="number" 
//             value={mobileNo} 
//             onChange={(e) => setMobileNo(e.target.value)} 
//             required 
//           />
//         </div>
      
//         <button type="submit"><FontAwesomeIcon icon={faHandHoldingHeart} /> Submit Donation</button>
//       </form>

//       {/* <div className="donation-list">
//         <h3>Recent Donations</h3>
//         <ul>
//           {donations.map((donation, index) => (
//             <li key={index}>
//               {donation.donorName} donated ${donation.donationAmount} on {donation.donationDate}
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default Donation;






import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faDonate, faPrint } from '@fortawesome/free-solid-svg-icons';
import './Donation.css'; // Add your custom styles here

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const societyDetails = {
    name: 'Youth Supportive Society',
    address: 'Mukundabag, Murshidabad, Pin- 742104',
    contact: '9733542533'
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setDonationSubmitted(true);

    // Clear form inputs after submission
    setDonorName('');
    setDonationAmount('');
    setDonationDate('');
    setAddress('');
    setMobileNo('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="donation-section">
      <h2><FontAwesomeIcon icon={faDonate} /> Donation</h2>

      {/* Donation form */}
      {!donationSubmitted && (
        <form onSubmit={handleDonationSubmit}>
          <div>
            <label>Date:</label>
            <input 
              type="date" 
              value={donationDate} 
              onChange={(e) => setDonationDate(e.target.value)} 
              required 
            />
          </div>
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
            <label>Address:</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input 
              type="number" 
              value={mobileNo} 
              onChange={(e) => setMobileNo(e.target.value)} 
              required 
            />
          </div>
          <button type="submit"><FontAwesomeIcon icon={faHandHoldingHeart} /> Submit Donation</button>
        </form>
      )}

      {/* Donation slip and print option */}
      {donationSubmitted && (
        <div className="donation-slip">
          <h3>Donation Receipt</h3>
          <p><strong>Society Name:</strong> {societyDetails.name}</p>
          <p><strong>Address:</strong> {societyDetails.address}</p>
          <p><strong>Contact:</strong> {societyDetails.contact}</p>
          <hr />
          <p><strong>Donor Name:</strong> {donorName}</p>
          <p><strong>Donation Amount:</strong> ${donationAmount}</p>
          <p><strong>Date:</strong> {donationDate}</p>
          <button onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /> Print Slip</button>
        </div>
      )}
    </div>
  );
};

export default Donation;
