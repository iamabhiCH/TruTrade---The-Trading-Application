import React from "react";
import LandingPage from "./landingPage";
import Features from "./ourFeatures";
import Spectrum from './spectrum';
import Pricing from './pricing';
import Testonomial from "./testonomial";

const Home = () => {
    return (
        <>
            <LandingPage />
            <Features />
            <Spectrum />
            <Pricing />
            <Testonomial />
        </>
    );
};

export default Home;
