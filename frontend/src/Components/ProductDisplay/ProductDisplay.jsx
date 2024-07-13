import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import './ProductDisplay.css';

const ProductDisplay = () => {
  const { productId } = useParams();
  const { products, cartItems, addToCart, removeFromCart } = useContext(HomeContext);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  const product = products.find((e) => e.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  const isInCart = cartItems[product.id] > 0;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[product.image, product.image, product.image, product.image].map((img, index) => (
            <img key={index} src={img} alt={`${product.name} ${index}`} />
          ))}
        </div>
      </div>
      <div className="productdisplay-img">
        <img src={product.image} alt={product.name} className="productdisplay-main-img" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <h1>Price: {product.price}</h1>
          <h1>Rating: {product.rating}</h1>
          <h1>
            Portfolio: <a href={product.url} target="_blank" rel="noopener noreferrer">Visit Portfolio</a>
          </h1>
        </div>
        <div className="productdisplay-right-description">
          A portfolio typically refers to a collection of work or projects that showcases someone's skills, experience, and achievements. It can include examples of professional work, personal projects, academic accomplishments, and other relevant activities. Portfolios are often used by individuals in creative fields like design, writing, and programming, as well as in business and academic settings to demonstrate their capabilities and expertise to potential employers or clients. They serve as a visual and often interactive representation of one's abilities and accomplishments.
        </div>
        <div className="productdisplay-buttons">
          {isInCart ? (
            <button onClick={() => removeFromCart(product.id)}>REMOVE FROM CART</button>
          ) : (
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
