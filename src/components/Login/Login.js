import React, { useState } from "react";
import Slider from "react-slick";
import "./login.css";
import EmailIcon from "@mui/icons-material/Email";
import LoginImg1 from "../../resource/signup1.svg";
import LoginImg2 from "../../resource/signup2.svg";
import { FaUnlockAlt, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const CustomArrow = () => null;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />,
    };

    return (
        <div className="login-container">
            <div className="login-right">
                <h1>TruTrade</h1>
                <div className="login-slider">
                    <Slider {...settings} className="s-slider">
                        <div className="slider-sign-content">
                            <img src={LoginImg1} alt="loginImage" />
                        </div>
                        <div className="slider-sign-content">
                            <img src={LoginImg2} alt="loginImage" />
                        </div>
                    </Slider>
                    <h2>Welcome Back!</h2>
                    <p>
                        Login into your account to start adding strategies to
                        your trades!
                    </p>
                </div>
            </div>
            <div className="login-left">
                <div className="login-content">
                    <h1>Welcome back!</h1>
                    <p>
                        Login into your account to start adding strategies to
                        your trades!
                    </p>
                    <form>
                        <div className="login-form">
                            <EmailIcon
                                className="emailIcon"
                                style={{ color: "#123591" }}
                            />
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email ID / Client ID"
                                required
                            />
                        </div>
                        <div className="login-form">
                            <FaUnlockAlt
                                className="lockIcon"
                                style={{ color: "#123591" }}
                            />
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="passInput"
                                    placeholder="Password"
                                    required
                                />
                                <div
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <FaRegEyeSlash />
                                    ) : (
                                        <FaRegEye />
                                    )}
                                </div>
                            </div>
                        </div>
                        <button>Continue</button>
                    </form>
                    <h6>
                        Copyright © 2024 TruTrade. All rights reserved.
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Login;