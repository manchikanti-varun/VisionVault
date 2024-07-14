import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
import './ProductDisplay.css';

const ProductDisplay = () => {
  const { templateId } = useParams();
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(HomeContext);

  const template = all_product.find(product => product.id === parseInt(templateId));

  if (!template) {
    return <div>Product not found</div>;
  }

  const isInCart = cartItems[template.id] > 0;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[template.image, template.image, template.image, template.image].map((img, index) => (
            <img key={index} src={img} alt={`${template.name} ${index}`} />
          ))}
        </div>
      </div>
      <div className="productdisplay-img">
        <img src={template.image} alt={template.name} className="productdisplay-main-img" />
      </div>
      <div className="productdisplay-right">
        <h1>{template.name}</h1>
        <div className="productdisplay-right-prices">
          <h1>Price: ₹{template.price}</h1>
          <h1>Rating: {template.rating} ★</h1>
          <h1>
            Portfolio: <a href={template.url} target="_blank" rel="noopener noreferrer">Visit Portfolio</a>
          </h1>
        </div>
        <div className="productdisplay-right-description">
          A portfolio typically refers to a collection of work or projects that showcases someone's skills, experience, and achievements. It can include examples of professional work, personal projects, academic accomplishments, and other relevant activities. Portfolios are often used by individuals in creative fields like design, writing, and programming, as well as in business and academic settings to demonstrate their capabilities and expertise to potential employers or clients. They serve as a visual and often interactive representation of one's abilities and accomplishments.
        </div>
        <div className="productdisplay-buttons">
          {isInCart ? (
            <button onClick={() => removeFromCart(template.id)}>REMOVE FROM CART</button>
          ) : (
            <button onClick={() => addToCart(template.id)}>ADD TO CART</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
