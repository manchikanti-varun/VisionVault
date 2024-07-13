import React from 'react';
import './CSS/Templates.css';
import all_products from '../Components/asserts-varun/all_products'; 
import Item from '../Components/Item/Item';

const Templates = () => {
    return (
        <div className="All">
            <h1>All PORTFOLIOS</h1>
            <hr />
            <div className="All-items">
                {all_products.map((item, i) => (
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

export default Templates;
