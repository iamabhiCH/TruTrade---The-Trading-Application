import React from "react";
import "./card.css";

const card = ({ data }) => {
    return (
        <div>
            <div className="cards-container">
                {data.map((value, index) => (
                    <div className="card1" key={index} id={value.id}>
                        <div className="card1-img">
                            <img src={value.icon} alt="Icon1" />
                        </div>
                        <div className="card1-img-hover">
                            <img src={value.hoverIcon} alt="Icon1" />
                        </div>
                        <div className="card1-heading">
                            <h2>{value.title}</h2>
                        </div>
                        <div className="card1-para">
                            <p>{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default card;
