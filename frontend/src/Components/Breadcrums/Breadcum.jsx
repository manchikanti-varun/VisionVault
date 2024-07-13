import React from "react";
import './Breadcrum.css';
import arrow_icon from '../asserts-varun/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="arrow" /> TEMPLATES <img src={arrow_icon} alt="arrow" /> {product.name}
        </div>
    );
}

export default Breadcrum;
