import React from "react";
import LandingPage from "./landingPage";
import Features from "./ourFeatures";
import Spectrum from "./spectrum";
import Pricing from "./pricing";
import Testonomial from "./testinomial";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <div id="scrollOnTop">
                <Header />
            </div>
            <LandingPage />
            <Features />
            <Spectrum />
            <Pricing />
            <Testonomial />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
