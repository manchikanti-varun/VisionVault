import React from "react";
import './Popular.css';
import data_product from '../asserts-varun/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR PORTFOLIOS</h1>
            <hr />
            <div className="popular-items">
                {data_product.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        price={item.price} 
                        rating={item.rating} 
                        url={item.url} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
