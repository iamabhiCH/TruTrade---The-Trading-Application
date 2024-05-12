import React from "react";
import "./testinomial.css";

import Slider from "react-slick";
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
const testonomial = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="hero-testimonial">
            <div className="testinomial-sec"></div>
            <div className="testonomial-comments">
                <Slider {...settings} className="testi-slider">
                    <div className="slider-content">
                        <h4 className="tet">
                            “I've tried various trading platforms, and TruTrade
                            stands out for its reliability. The platform's
                            stability, coupled with the excellent customer
                            service, gives me the confidence to execute trades
                            seamlessly. TruTrade has become my go-to for all
                            things trading.”
                        </h4>
                        <h3 className="auth">Abhinav Arya</h3>
                    </div>
                    <div className="slider-content">
                        <h4 className="tet">
                            “TruTrade has transformed my trading experience.
                            The platform's intuitive design and robust features
                            make it a standout choice. I appreciate the constant
                            updates and the support from the TruTrade team.
                            Trading has never been this smooth.”
                        </h4>
                        <h3 className="auth">Akash Madhdheshiya</h3>
                    </div>
                    <div className="slider-content">
                        <h4 className="tet">
                            “Trading with TruTrade has been a game-changer for
                            me. The platform's versatility and the array of
                            analytical tools provide a comprehensive trading
                            experience. The real-time market data ensures I
                            never miss a beat. Kudos to the TruTrade team for a
                            top-notch platform”
                        </h4>
                        <h3 className="auth">Akash Sharma</h3>
                    </div>
                </Slider>
            </div>
            <div className="testomonial-heading">
                <h6>testimonials</h6>
                <h1>What they say about us?</h1>
                <p>
                    Welcome to TruTrade's Testimonials ! Dive into the stories
                    of clients who've experienced success with us. Real voices,
                    real impact. See how TruTrade make your trading easy and
                    simple
                </p>
            </div>
        </div>
    );
};

export default testonomial;
