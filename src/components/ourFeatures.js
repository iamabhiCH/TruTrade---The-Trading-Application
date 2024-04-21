import React from "react";
import "./ourFeatures.css";
import Card from "./card";
import Icon1 from "../resource/service-icon-01.webp";
import Icon2 from "../resource/service-icon-02.webp";
import Icon3 from "../resource/service-icon-03.webp";
import Icon4 from "../resource/service-icon-04.webp";
import Icon1Hover from "../resource/service-icon-hover-01.webp";
import Icon2Hover from "../resource/service-icon-hover-02.webp";
import Icon3Hover from "../resource/service-icon-hover-03.webp";
import Icon4Hover from "../resource/service-icon-hover-04.webp";

const cardContent = [
    {
        icon: Icon1,
        hoverIcon: Icon1Hover,
        title: "Trading Engine",
        desc: "An intelligent tool for automated trading, executing trades based on user-defined rules.",
    },
    {
        id: "c2",
        icon: Icon2,
        hoverIcon: Icon2Hover,
        title: "Strategy Bulding Wizard",
        desc: "Revolutionizing trading by offering smart strategies without coding. Users can create and sell ideas.",
    },
    {
        id: "c2",
        icon: Icon3,
        hoverIcon: Icon3Hover,
        title: "Social Trading",
        desc: "Choose trader strategies based on performance, replicate their actions in your portfolio, even without expertise.",
    },
    {
        icon: Icon4,
        hoverIcon: Icon4Hover,
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
