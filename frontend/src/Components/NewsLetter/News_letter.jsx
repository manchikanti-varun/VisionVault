import React from 'react';
import './News_letter.css';

const News_letter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default News_letter;
