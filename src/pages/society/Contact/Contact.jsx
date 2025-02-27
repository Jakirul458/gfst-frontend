import React from "react";
import './Contact.css';  
import logo from '../../../assets/icons/logo.svg';

function Contact() {
    return (
        <div className="contact-container">
            <img src={logo} alt="GFST Logo" className="logo" />
            <h2 className="contact-title">Contact Information</h2>
            <p className="contact-description">
                If you have any questions or need further information, feel free to contact us:
            </p>
            <div className="contact-info">
                <a href="mailto:gfcsmsd@gmail.com?subject=Inquiry&body=Hello," className="contact-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo" className="contact-icon" />
                    <span className="gmail-text">gfcsmsd@gmail.com</span>
                </a>
                <a href="mailto:jakirul458rimon@gmail.com?subject=Inquiry&body=Hello," className="contact-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo" className="contact-icon" />
                    <span className="gmail-text">jakirul458rimon@gmail.com</span>
                </a>
                <span className="contact-phone">Sarifur Rahaman  +91 9733542533</span>
                <span className="contact-phone">Ayub Sk +91 7029121433</span>
                <span className="contact-phone">Ripon Sk +91 8337840226</span>
                
            </div>
        </div>
    );
}

export default Contact;
