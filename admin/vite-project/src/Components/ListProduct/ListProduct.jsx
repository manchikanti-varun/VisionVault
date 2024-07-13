import React, { useState, useEffect } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:4000/getproducts");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched products:", data);
            setAllProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const removeProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:4000/deleteproduct/${productId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            const responseData = await response.json();

            if (responseData.success) {
                setAllProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
                alert("Product deleted successfully.");
            } else {
                alert("Failed to delete product.");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="list-product-loading">Loading...</div>;
    }

    if (error) {
        return <div className="list-product-error">Error: {error}</div>;
    }

    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="list-product-header">
                <p>Image</p>
                <p>Title</p>
                <p>Price</p>
                <p>Rating</p>
                <p>URL</p>
                <p>Actions</p>
            </div>
            <div className="list-product-items">
                {allProducts.length > 0 ? (
                    allProducts.map((product) => (
                        <div key={product._id} className="list-product-item">
                            <img src={product.image} alt={product.name} className="list-product-image" />
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                            <p>{product.rating}</p>
                            <p>
                                <a href={product.url} target="_blank" rel="noopener noreferrer">
                                    View
                                </a>
                            </p>
                            <img
                                src={cross_icon}
                                alt="Remove"
                                className="list-product-remove-icon"
                                onClick={() => removeProduct(product._id)}
                            />
                        </div>
                    ))
                ) : (
                    <div className="list-product-empty">No products available</div>
                )}
            </div>
        </div>
    );
};

export default ListProduct;
