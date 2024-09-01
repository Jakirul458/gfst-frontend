

import React from "react";

function Contact() {
    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const infoStyle = {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const linkStyle = {
        color: '#216ce7',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
    };

    const iconStyle = {
        width: '24px',
        height: '24px',
        marginRight: '8px',
    };

    return (
        <div style={containerStyle}>
            <h2>Contact Information</h2>
            <p>If you have any questions or need further information, feel free to contact me at:</p>
            <div style={infoStyle}>
                <a href="mailto:jakirul458rimon@gmail.com" style={linkStyle}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo" style={iconStyle} />
                    jakirul458rimon@gmail.com
                </a>
                {/* <a href="tel:+1234567890" style={linkStyle}>
                    <img src="https://in.pinterest.com/pin/823806956826119636/" alt="Phone Icon" style={iconStyle} />
                    +91 6294527072 
                </a> */}
               <span>+91 9733542533</span>
               <span>+91 7029121433</span>
               <span>+91 6294527072 </span>
                
                
               
            </div>
        </div>
    );
}

export default Contact;
