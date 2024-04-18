import React from "react";
import "./ourFeatures.css";
import Card from "./card";
import Icon1 from "../resource/service-icon-01.webp";
import Icon2 from "../resource/service-icon-02.webp";
import Icon3 from "../resource/service-icon-03.webp";
import Icon4 from "../resource/service-icon-04.webp";
const cardContent = [
    {
        icon: Icon1,
        title: "Trading Engine",
        desc: "An intelligent tool for automated trading, executing trades based on user-defined rules.",
    },
    {
        id: "c2",
        icon: Icon2,
        title: "Strategy Bulding Wizard",
        desc: "Revolutionizing trading by offering smart strategies without coding. Users can create and sell ideas.",
    },
    {
        id: "c2",
        icon: Icon3,
        title: "Social Trading",
        desc: "Choose trader strategies based on performance, replicate their actions in your portfolio, even without expertise.",
    },
    {
        icon: Icon4,
        title: "BackTesting",
        desc: "Manage trading differences using three backtesting options, with the worst-case scenario.",
    },
];

const Features = () => {
    return (
        <div className="features-containcer">
            <div className="features-Head">
                <h1>Explore Our Features</h1>
                <p>
                    Unlock your investment potential with our unique tools. We
                    make it easier for you to enter the intricate realm of
                    capital trading with revolutionary AI-powered capabilities.
                </p>
            </div>
            <Card data={cardContent} />
        </div>
    );
};

export default Features;
