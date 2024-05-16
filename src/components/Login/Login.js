import React from 'react'
import Slider from "react-slick";
import './login.css'

import LoginImg1  from "../../resource/signup1.svg";
import LoginImg2  from "../../resource/signup2.svg";


const Login = () => {

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
    <div className="login-container">
        <div className="login-right">
            <h1>TruTrade</h1>
            <div className="login-slider">
                <Slider {...settings} className="s-slider">
                    <div className="slider-sign-content">
                        <img src={LoginImg1} alt="loginImage"/>
                    </div>
                    <div className="slider-sign-content">
                        <img src={LoginImg2} alt="loginImage"/>
                    </div>
                </Slider>
                <h2>Welcome Back!</h2>
                <p>Login into your account to start adding strategies to your trades!</p>
            </div>
        </div>
        <div className="login-left"></div>
    </div>
);
}

export default Login