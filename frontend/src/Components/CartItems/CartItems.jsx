import React, { useContext, useState, useEffect } from "react";
import './CartItems.css';
import { HomeContext } from "../../Context/HomeContext";
import remove_icon from '../asserts-varun/cart_cross_icon.png';
import ResumeForm from "../ResumeForm/ResumeForm"; // Import the ResumeForm component

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(HomeContext);
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const [currentUserId, setCurrentUserId] = useState(null); // State to store current user ID

    useEffect(() => {
        fetchCurrentUserId(); // Fetch current user ID when component mounts
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

    const totalAmount = all_product.reduce((total, product) => {
        if (cartItems[product.id]) {
            return total + product.price;
        }
        return total;
    }, 0);

    const handleProceedToCheckout = () => {
        setShowForm(true);
    };

    const handleFormSubmit = async (formData) => {
        try {
            formData.userId = currentUserId; // Attach current user ID to form data

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
                // Handle success (e.g., show a success message or redirect)
            } else {
                throw new Error("Failed to submit form data");
            }
        } catch (error) {
            console.error("Error submitting form data: ", error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId); // Assuming removeFromCart function is provided by HomeContext
    };

    return (
        <div className="cartitems">
            {/* Cart items rendering logic */}
            {Object.keys(cartItems).map((productId) => (
                <div key={productId} className="cart-item">
                    {/* Display product details */}
                    {/* Example: <p>{all_product.find(product => product.id === productId).name}</p> */}
                    {/* Display remove icon with onClick handler */}
                    <img
                        src={remove_icon}
                        alt="Remove"
                        className="remove-icon"
                        onClick={() => handleRemoveFromCart(productId)}
                    />
                </div>
            ))}

            <div className="cart-total">
                <p>Total Amount: ₹{totalAmount}</p>
                <button className="Proceed-to-checkout-button" onClick={handleProceedToCheckout}>
                    Proceed To CheckOut
                </button>
            </div>

            {/* Conditionally render the resume form */}
            {showForm && <ResumeForm onSubmit={handleFormSubmit} />}
        </div>
    );
}

export default CartItems;
