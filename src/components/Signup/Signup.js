import React, { useState } from "react";
import "./Signup.css";
import Slider from "react-slick";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import SignupImg1 from "../../resource/signup1.svg";
import SignupImg2 from "../../resource/signup2.svg";
import { FaUnlockAlt, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import axios from "axios";
const CustomArrow = () => null;

const Signup = () => {
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

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handelSubmit = async (e) => {
        e.preventDefault();
        const bodyData = {
            name: fullName,
            email: email,
            password: password,
        };
        const resp = await axios.post(
            "http://localhost:8000/user/signup",
            bodyData
        );

        if (resp.data.success === true) {
            alert("Signup successfull");
        } else {
            alert("Try Again");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-right">
                <h1>TruTrade</h1>
                <div className="signup-slider">
                    <Slider {...settings} className="s-slider">
                        <div className="slider-sign-content">
                            <img src={SignupImg1} alt="signupImage" />
                        </div>
                        <div className="slider-sign-content">
                            <img src={SignupImg2} alt="signupImage" />
                        </div>
                    </Slider>
                    <h2>Welcome Back!</h2>
                    <p>
                        Login into your account to start adding strategies to
                        your trades!
                    </p>
                </div>
            </div>
            <div className="signup-left">
                <div className="signup-content">
                    <h1>Welcome!</h1>
                    <p>
                        Please enter your email to send OTP! or go back to{" "}
                        <Link to="/login" className="login-page-switch">
                            Login
                        </Link>
                    </p>
                    <form onSubmit={handelSubmit}>
                        <div className="signup-form">
                            <IoPersonSharp
                                className="emailIcon"
                                style={{ color: "#123591" }}
                            />
                            <input
                                type="text"
                                className="emailInput"
                                placeholder="Enter Your Name"
                                required
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="signup-form">
                            <EmailIcon
                                className="emailIcon"
                                style={{ color: "#123591" }}
                            />
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email ID / Client ID"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signup-form">
                            <FaUnlockAlt
                                className="emailIcon"
                                style={{ color: "#123591" }}
                            />
                            <input
                                type="password"
                                className="emailInput"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <h6>Copyright © 2024 TruTrade. All rights reserved.</h6>
                </div>
            </div>
        </div>
    );
};

export default Signup;
