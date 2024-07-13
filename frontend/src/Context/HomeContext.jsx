import React, { createContext, useState } from "react";
import all_product from '../Components/asserts-varun/all_products';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: 1
        }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: 0
        }));
    }

    return (
        <HomeContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart, getTotalCartItems }}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;
