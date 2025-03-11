import React from "react";
import './Footer.css';
import footerLogo from '../../Assets/logo.svg';
import userIcon from '../../Assets/user_icon.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerLogo} alt="Footer Logo" />
                    <p>Stay updated with our latest news and offers</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={userIcon} alt="User Icon" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <button className="footer-subscribe">SUBSCRIBE</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Arya Gupta. All Rights Reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;