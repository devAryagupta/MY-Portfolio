import React from "react";
import './Contact.css';
import themePattern from '../../Assets/theme_pattern.svg';
import mailIcon from '../../Assets/mail_icon.svg';
import locationIcon from '../../Assets/location_icon.svg';
import callIcon from '../../Assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "05ad55a0-1c0c-4e19-9f4d-4d3b2f7d9ca7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const result = await response.json();
            if (result.success) {
                alert(result.message);
            } else {
                alert("Submission failed, please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form: ", error);
            alert("An error occurred, please try again.");
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mailIcon} alt="Mail Icon" />
                            <p>ag55140@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={callIcon} alt="Call Icon" />
                            <p>+91 7877167264</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationIcon} alt="Location Icon" />
                            <p>Jaipur, Rajasthan, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your Email" required />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your Message" required></textarea>
                    <button type="submit" className="contact-submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;