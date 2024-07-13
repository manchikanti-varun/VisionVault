import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HomeContext } from '../Context/HomeContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Template = () => {
    const { templateId } = useParams();
    const { products } = useContext(HomeContext);
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Products:", products); // Logging products
        console.log("Template ID:", templateId); // Logging templateId

        if (Array.isArray(products) && products.length > 0) {
            const foundProduct = products.find((e) => e.id === Number(templateId));
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                console.error("Product not found with ID:", templateId);
                navigate('/templates'); // Redirect if product not found
            }
            setLoading(false); // Stop loading once the check is complete
        } else {
            setLoading(false); // Stop loading if products is not an array or is empty
        }
    }, [products, templateId, navigate]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (!product) {
        return <div>Product not found</div>; // Handle case when product is not found
    }

    return (
        <ProductDisplay product={product} />
    );
}

export default Template;
