import React from "react";
import "./testinomial.css";

import Slider from "react-slick";

const testonomial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="testinomial-sec">
            <div className="testonomial-comments">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
            <div className="testonomial-heading">
                <h6>testinomials</h6>
                <h1>What they say about us?</h1>
                <p>
                    Welcome to Algoroom's Testimonials ! Dive into the stories
                    of clients who've experienced success with us. Real voices,
                    real impact. See how Algorooms make your trading easy and
                    simple
                </p>
            </div>
        </div>
    );
};

export default testonomial;
