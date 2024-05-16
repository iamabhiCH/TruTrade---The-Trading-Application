import React from "react";
import "./Signup.css";
import Slider from "react-slick";

import SignupImg1  from "../../resource/signup1.svg";
import SignupImg2  from "../../resource/signup2.svg";

const Signup = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
                    <h2>Welcome Back!</h2>
                    <p>Login into your account to start adding strategies to your trades!</p>
                </div>
            </div>
            <div className="signup-left"></div>
        </div>
    );
};

export default Signup;