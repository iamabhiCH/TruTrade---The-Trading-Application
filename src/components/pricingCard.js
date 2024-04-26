import React from "react";
import "./pricingCard.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const pricingCard = ({ data }) => {
    return (
        <div>
            <div className="pricingCard-container">
                {data.map((value, index) => (
                    <div className="pricingCard" key={index}>
                        <div className="plan-name">
                            <h6>{value.category}</h6>
                        </div>
                        <div className="pr-img">
                            <img src={value.logo} alt="Free" />
                        </div>
                        <div className="priceday">
                            <h1>
                                ₹{value.planPrice} <span>/ day</span>
                            </h1>
                        </div>
                        <span className="line"></span>
                        <div className="plan-features">
                            {value?.features?.map((feature,cross) => {
                                return (
                                    <p>
                                        {value.crossIndex == cross || value.crossIndex + 2 == cross + 1 ? (
                                            <div>
                                                <ImCross color="#007bff" size={12} />
                                            </div>
                                        ) : (
                                            <TiTick color="#007bff" size={18} />
                                        )}
                                        {feature}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="price-btn">
                            <button>Get Started</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default pricingCard;
