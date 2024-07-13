import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/template/${props.id}`} className="item-link">
                <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price">
                        ₹{props.price}
                    </div>
                    <div className="item-rating">
                        {props.rating} ★
                    </div>
                </div>
            </Link>
            <a href={props.url} target="_blank" rel="noopener noreferrer" className="external-link">
                View on Portfolio
            </a>
        </div>
    );
}

export default Item;
