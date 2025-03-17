import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import logo from "../../../assets/icons/logo.svg";

function Contact() {
  return (
    <div className="contact-container">
      {/* Logo Section */}
      <img src={logo} alt="GFST Logo" className="logo" />
      <h2 className="contact-title">Contact Information</h2>
      <p className="contact-description">
        If you have any questions or need further information, feel free to contact us:
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <a href="mailto:gfcsmsd@gmail.com?subject=Inquiry&body=Hello," className="contact-link">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
            alt="Gmail Logo" 
            className="contact-icon" 
          />
          <span className="gmail-text">gfcsmsd@gmail.com</span>
        </a>
        

        {/* Contact Numbers */}
        <span className="contact-phone">Sarifur Rahaman   +91 9733542533</span>
        <span className="contact-phone">Ayub Sk   +91 7029121433</span>
        <span className="contact-phone">Ripon Sk   +91 8337840226</span>
      </div>

      {/* Footer Section */}
      <div className="contact-section">
        <h4>Contact Us</h4>
        <p>
          <FaMapMarkerAlt />{" "}
          <a
            href="https://maps.app.goo.gl/6vDD1xGuAweKyEVHA"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
             Murshidabad, West Bengal
          </a>
        </p>
        <p>© 2025 Golden Future Supportive Trust. All Rights Reserved.</p>
        <p>
          Developed by:{" "}
          <a
            href="https://jakirulsk.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Jakirul Sk
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
