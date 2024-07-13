import React from 'react';
import './New_collections.css';
import new_collection from '../asserts-varun/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => (
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
};

export default NewCollections;
