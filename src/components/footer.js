import "./footer.css";
import React from "react";
import TermsOfUse from "./term.js";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="container">
                    <div className="org-info">
                        <h2 className="org-name">TruTrade</h2>
                        <p>AB software solutions pvt. ltd.</p>
                        <p>Siwan, Bihar (INDIA)</p>
                        <p>Email : ab@trutrade.com</p>
                        <p>Phone : +91-1117704119</p>
                    </div>
                    <div className="social">
                        <ul className="social-icons">
                            <li>
                                <a href="/test">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/test">
                                    <XIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/test">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/test">
                                    <YouTubeIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/test">
                                    <InstagramIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="org-services1">
                        <ul>
                            <li>
                                <a href="/test">Home</a>
                            </li>
                            <li>
                                <a href="/test">Features</a>
                            </li>
                            <li>
                                <a href="/test">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="org-services2">
                        <ul>
                            <li>
                                <a href="/test">Pricing</a>
                            </li>
                            <li>
                                <a href="/test">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/test">Refund Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="terms-container">
                    <TermsOfUse />
                </div>
                <div className="copyright">
                    <p>
                        Copyright © 2024, All right reserved to TruTrade. ||
                        Designed & Developed with ❤️ by Abhishek Yadav.
                    </p>
                </div>
                <a href="#scrollOnTop">
                    <button id="scrollToTopButton">^</button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
