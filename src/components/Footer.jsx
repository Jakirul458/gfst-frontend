import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
    return (
        <footer className="footer">
            <div className="about-section">
                <h4>About</h4>
                <p>Learn more about us.</p>
            </div>
            <div className="contact-section">
                <h4>Contact</h4>
                <p>Get in touch with us.</p>                              
            </div>
        </footer>
    );
}

export default Footer;
