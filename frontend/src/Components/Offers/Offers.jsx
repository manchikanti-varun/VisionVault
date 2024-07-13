import React from "react";
import './Offers.css';
import exclusive_image from '../asserts-varun/exclusive_image.png'; // Make sure the path is correct

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="Exclusive Offers" />
            </div>
        </div>
    );
}

export default Offers;
