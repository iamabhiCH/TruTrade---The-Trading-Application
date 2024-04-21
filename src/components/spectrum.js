import React from "react";
import "./spectrum.css";

import Card from "./card";
import Features from "../resource/features.svg";

const cardContent = [
    {
        title: "Begin with signing up",
        desc: "Start your trading journey by signing up and loging into your trading account on our trading platform",
    },
    {
        title: "Pick Your Strategy",
        desc: "Protect yourself from the ups and downs of the market by including your preferred level of risk into the trading algorithm.",
    },
    {
        title: "Risk-Aware Trading",
        desc: "You can decide how to trade on our platform. Pick expert trading plans made by professionals, or make your own strategy.",
    },
    {
        title: "Trade with Ease",
        desc: "Once you've adjusted everything the way you prefer, you can start your trading journey using our platform.",
    },
];

const spectrum = () => {
    return (
        <div>
            <div className="spectrum-section">
                <h1>Navigate the spectrum</h1>
                <p>
                    Amateurs find guidance, experts find innovation - all on our
                    platform.
                </p>
            </div>
            <div className="parent-spec">
                <div className="hero-spec-image">
                    <img src={Features} alt="Hero Image" />
                </div>
                <div className="hero-spec-card">
                    <Card data={cardContent} />
                </div>
            </div>
        </div>
    );
};

export default spectrum;
