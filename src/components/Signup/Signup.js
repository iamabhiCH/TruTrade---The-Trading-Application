import React from "react";
import "./Signup.css";
import Slider from "react-slick";

import SignupImg1  from "../../resource/signup1.svg";
import SignupImg2  from "../../resource/signup2.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const Signup = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="signup-container">
            <div className="signup-right">
                <h1>TruTrade</h1>
                <div className="signup-slider">
                    <Slider {...settings} className="s-slider">
                        <div className="slider-sign-content">
                            <img src={SignupImg1} alt="signupImage"/>
                        </div>
                        <div className="slider-sign-content">
                            <img src={SignupImg2} alt="signupImage"/>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="signup-left"></div>
        </div>
    );
};

export default Signup;