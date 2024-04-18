import React from "react";
import './ourFeatures.css'

import Icon1 from "../resource/service-icon-01.webp";
import Icon2 from "../resource/service-icon-02.webp";
import Icon3 from "../resource/service-icon-03.webp";
import Icon4 from "../resource/service-icon-04.webp";

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
            <div className="cards-container">
                <div className="card1">
                    <img src={Icon1} alt="Icon1" />
                    <h2>Trading Engine</h2>
                    <p>
                        An intelligent tool for automated trading, executing
                        trades based on user-defined rules.
                    </p>
                </div>
                <div className="card2">
                    <img src={Icon2} alt="Icon2" />
                    <h2>Strategy Building Wizard</h2>
                    <p>
                        Revolutionizing trading by offering smart strategies
                        without coding. Users can create and sell ideas.
                    </p>
                </div>
                <div className="card3">
                    <img src={Icon3} alt="Icon3" />
                    <h2>Socail Trading</h2>
                    <p>
                        Choose trader strategies based on performance, replicate
                        their actions in your portfolio, even without expertise.
                    </p>
                </div>
                <div className="card4">
                    <img src={Icon4} alt="Icon4" />
                    <h2>BackTesting</h2>
                    <p>
                        Manage trading differences using three backtesting
                        options, with the worst-case scenario.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
