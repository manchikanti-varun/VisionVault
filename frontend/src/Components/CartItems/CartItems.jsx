import React, { useContext, useState, useEffect } from "react";
import './CartItems.css';
import { HomeContext } from "../../Context/HomeContext";
import remove_icon from '../asserts-varun/cart_cross_icon.png'; // Corrected path
import ResumeForm from "../ResumeForm/ResumeForm";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(HomeContext);
    const [showForm, setShowForm] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        fetchCurrentUserId();
    }, []);

    const fetchCurrentUserId = async () => {
        try {
            const token = localStorage.getItem("auth-token");
            if (!token) throw new Error("User not authenticated");

            const response = await fetch("http://localhost:4000/api/currentUserId", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user ID');
            }

            const responseData = await response.json();
            setCurrentUserId(responseData.userId);
        } catch (error) {
            console.error("Error fetching current user ID:", error);
        }
    };

    const totalAmount = Object.keys(cartItems).reduce((total, productId) => {
        const product = all_product.find(product => product.id === parseInt(productId));
        if (product) {
            return total + product.price;
        }
        return total;
    }, 0);

    const handleProceedToCheckout = () => {
        setShowForm(true);
    };

    const handleFormSubmit = async (formData) => {
        try {
            formData.userId = currentUserId;

            const response = await fetch("/api/saveResumeData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("auth-token")}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Form Data Submitted: ", result);
            } else {
                throw new Error("Failed to submit form data");
            }
        } catch (error) {
            console.error("Error submitting form data: ", error);
        }
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    console.log("Cart Items:", cartItems); // Debugging
    console.log("All Products:", all_product); // Debugging

    return (
        <div className="cartitems">
            <table>
                <thead>
                    <tr>
                        <th>Templates</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(cartItems).map((productId) => {
                        const product = all_product.find(product => product.id === parseInt(productId));
                        if (!product) {
                            console.error(`Product with ID ${productId} not found`);
                            return null;
                        }
                        return (
                            <tr key={productId}>
                                <td><img src={product.image} alt={product.name} className="carticon-product-icon" /></td>
                                <td>{product.name}</td>
                                <td>₹{product.price}</td>
                                <td>₹{product.price}</td>
                                <td>
                                    <img
                                        src={remove_icon}
                                        alt="Remove"
                                        className="remove-icon"
                                        onClick={() => handleRemoveFromCart(productId)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            <div className="cart-total">
                <p>Total Amount: ₹{totalAmount}</p>
                <button className="Proceed-to-checkout-button" onClick={handleProceedToCheckout}>
                    Proceed To Checkout
                </button>
            </div>

            {showForm && <ResumeForm onSubmit={handleFormSubmit} />}
        </div>
    );
}

export default CartItems;
