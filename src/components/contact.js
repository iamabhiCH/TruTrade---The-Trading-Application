import React from "react";
import "./contact.css";

const contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-heading">
                    <h2>Feel free to contact us anytime</h2>
                    <p>
                        Mail your query at <a>support@trutrade.com</a>
                    </p>
                    <p>Telephone : 007-007-2407</p>
                    <p>Mobile : +91-1117704119</p>
                    <p>ADDRESS : Siwan, Bihar (INDIA)</p>
                </div>
            </div>
            <div className="contact-form">
                    <div className="contact-content">
                        <h1>Contatct Us</h1>
                        <form className="hero-form">
                            <div className="name"><input placeholder="Your Name..." required /></div>
                            <div className="email"><input placeholder="Your E-mail..." required/></div>
                            <div className="message"><textarea rows={5} cols={30} placeholder="Your Message..." required/></div>
                            <button>Send Message Now</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default contact;
