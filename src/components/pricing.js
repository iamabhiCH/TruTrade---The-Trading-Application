import React, { useState } from "react";
import PricingCard from "./pricingCard";

import price1 from "../resource/pr1.svg";
import price2 from "../resource/pr2.svg";
import price3 from "../resource/pr3.svg";

const Pricing = () => {
    const [priceData, setPriceData] = useState({
        free: 0,
        unlimited: 81,
        limited: 48,
    });

    const pricingData = [
        {
            category: "Free",
            logo: price1,
            planPrice: priceData.free,
            crossIndex: 4,
            features: [
                "50 Backtest Credit Points",
                "5 Strategy Creation",
                "No Basic + HNI & Retail Strategy Template Access",
                "Reporting Console",
                "No Strategy Deployment (Live & Forward)",
                "No Portfolio Backtesting",
            ],
        },
        {
            category: "unlimited plan",
            logo: price2,
            planPrice: priceData.unlimited,
            features: [
                "1500 Backtest Credit Points",
                "50 Strategy Creation",
                "Basic + HNI & Retail Strategy Template Access",
                "Reporting Console",
                "20 Strategy Deployment (Live & Forward)",
                "10 Strategy Portfolio Backtesting",
            ],
        },
        {
            category: "limited plan",
            logo: price3,
            planPrice: priceData.limited,
            features: [
                "500 Backtest Credit Points",
                "25 Strategy Creation",
                "Basic + HNI & Retail Strategy Template Access",
                "Reporting Console",
                "5 Strategy Deployment (Live & Forward)",
                "2 Strategy Portfolio Backtesting",
            ],
        },
    ];

    const handleMonthly = () => {
        setPriceData({
            free: 0,
            unlimited: 81,
            limited: 48,
        });
    };
    const handleQuarterly = () => {
        setPriceData({
            free: 0,
            unlimited: 69,
            limited: 41,
        });
    };
    const handleYearly = () => {
        setPriceData({
            free: 0,
            unlimited: 58,
            limited: 34,
        });
    };

    return (
        <div className="pricing-container">
            <div className="pricing-head">
                <h1>Our Pricing Plan</h1>
                <p>Pricing That Adapts to Your Success</p>
            </div>
            <div className="priceMenus">
                <div className="priceMenuBtn">
                    <button onClick={handleMonthly}>Monthly</button>
                </div>
                <div className="priceMenuBtn">
                    <button onClick={handleQuarterly}>Quarterly</button>
                </div>
                <div className="priceMenuBtn">
                    <button onClick={handleYearly}>Yearly</button>
                </div>
            </div>
            <PricingCard data={pricingData} />
        </div>
    );
};

export default Pricing;
