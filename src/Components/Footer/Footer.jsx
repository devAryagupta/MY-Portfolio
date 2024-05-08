import React from "react";
import './Footer.css'
import footer_logo from '../../Assets/footer_logo.svg'
import user_icon from '../../Assets/user_icon.svg'
const Footer =()=> {
    return (
        <div  className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p></p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon}alt=""/>
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="footer-subscribe">SUBSCRIBE</div>
                </div>
                
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Arya Gupta. All Rights Are Reserved.</p>
                <div className="footer-bottom-right"><p>Terms of Services</p><p>Privacy Policy</p><p> Connect with Me</p></div>
            </div>
        </div>
    )
}
export default Footer