import React from "react";
import './Contact.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import mail_icon from '../../Assets/mail_icon.svg'
import location_icon from '../../Assets/location_icon.svg'
import call_icon from '../../Assets/call_icon.svg'

const Contact =()=> {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>
                    Get In Touch
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p></p>
                    <div className="contact-details">
                        <div className="contact-detail"><img src={mail_icon} alt="" /><p>ag55140@gmail.com</p></div>
                        <div className="contact-detail"><img src={call_icon} alt="" /><p>+91 7877167264</p></div>
                        <div className="contact-detail"><img src={location_icon}alt="" /><p> location </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact