import './footer.css';
import React from "react";

const Footer = () => {

    document.addEventListener("DOMContentLoaded", function() {
        const scrollToTopButton = document.getElementById("scrollToTopButton");
    
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    
        scrollToTopButton.addEventListener("click", scrollToTop);
    });

    return (
        <footer>
            <div>
                <div>
                    
                </div>
                <div className="copyright">
                    <p>Copyright © 2024, All right reserver to TruTrade.</p>
                </div>
                <button id="scrollToTopButton">^</button>
            </div>
        </footer>
    );
};

export default Footer;