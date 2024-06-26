import React from "react";
import "./landingPage.css";
import HeroImg from "../resource/NewHero.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage-container">
            <div className="hero-section">
                <div className="text-image">
                    <div className="main-text">
                        <h1>
                            Trade Smarter,
                            <br /> Not Harder
                        </h1>
                        <h3>Where efficiency meets success</h3>
                        <p>
                            Our goal is to simplify the investment process,
                            <br /> making it as effortless as possible, even if
                            you're new to investing.
                        </p>
                        <Link to="/login" className="btn">GET STARTED</Link>
                    </div>
                    <div className="landingPage-img">
                        <img src={HeroImg} alt="Hero" />
                    </div>
                </div>
            </div>
            <div className="user-bar">
                <div className="exchanges">
                    <h1>7</h1>
                    <span>EXCHANGES</span>
                </div>
                <div className="sessions">
                    <h1>50K+</h1>
                    <span>ALGOTRADING SESSIONS</span>
                </div>
                <div className="tr-volume">
                    <h1>25M+</h1>
                    <span>TRADING VOLUME</span>
                </div>
                <div className="broking-house">
                    <h1>24</h1>
                    <span>BROKING HOUSE</span>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
