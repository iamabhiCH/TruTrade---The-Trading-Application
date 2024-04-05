import "./footer.css";
import React from "react";
import TermsOfUse from './term.js';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopButton = document.getElementById("scrollToTopButton");
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        scrollToTopButton.addEventListener("click", scrollToTop);
    });

    return (
        <footer>
            <div>
                <div className="container">
                    <div className="org-info">
                        <h2 className="org-name">TruTrade</h2>
                        <p>AB software solutions pvt. ltd.</p>
                        <p>Siwan, Bihar (INDIA) - 841235</p>
                        <p>Email : ab@trutrade.com</p>
                        <p>Phone : +91 1117704119</p>
                    </div>
                    <div className="social">
                        <ul className="social-icons">
                            <li>
                                <a href="#">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <XIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <YouTubeIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <InstagramIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="org-services1">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="org-services2">
                        <ul>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="terms-container">
                    <TermsOfUse />
                </div>
                <div className="copyright">
                    <p>Copyright © 2024, All right reserved to TruTrade. || Designed & Developed with ❤️ by Abhishek Yadav.</p>
                </div>
                <button id="scrollToTopButton">^</button>
            </div>
        </footer>
    );
};

export default Footer;
