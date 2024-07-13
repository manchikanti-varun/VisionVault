import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [templateDetails, setTemplateDetails] = useState({
    name: "",
    price: "",
    rating: "",
    url: "",
    description: "", // Added description field
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplateDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, price, rating, url, description } = templateDetails;

    // Form validation
    if (!name || !price || !rating || !url || !image || !description) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    let responseData;
    let template = { ...templateDetails };
    let formData = new FormData();
    formData.append("product", image);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      responseData = await response.json();

      if (responseData.success) {
        template.image = responseData.image_url;

        const saveTemplateResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(template),
          }
        );

        const saveTemplateData = await saveTemplateResponse.json();

        if (saveTemplateData.success) {
          alert("Product Added");
          // Clear the form after successful addition
          setTemplateDetails({
            name: "",
            price: "",
            rating: "",
            url: "",
            description: "", // Clear description field as well
          });
          setImage(null);
        } else {
          alert("Failed to add product");
        }
      } else {
        console.error("Image upload failed");
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
    }
  };

  return (
    <div className="add-product">
      <div className="add-product-itemfield">
        <p>Title</p>
        <input
          type="text"
          name="name"
          placeholder="Type Here"
          value={templateDetails.name}
          onChange={handleChange}
        />
      </div>
      <div className="add-product-itemfield">
        <p>Price</p>
        <input
          type="text"
          name="price"
          placeholder="Type Here"
          value={templateDetails.price}
          onChange={handleChange}
        />
      </div>
      <div className="add-product-itemfield">
        <p>Rating</p>
        <input
          type="text"
          name="rating"
          placeholder="Type Here"
          value={templateDetails.rating}
          onChange={handleChange}
        />
      </div>
      <div className="add-product-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="add-product-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={imageHandler}
          hidden
        />
      </div>
      <div className="add-product-itemfield">
        <p>URL</p>
        <input
          type="text"
          name="url"
          placeholder="Type Here"
          value={templateDetails.url}
          onChange={handleChange}
        />
      </div>
      <div className="add-product-itemfield">
        <p>Description</p>
        <textarea
          name="description"
          placeholder="Type Here"
          value={templateDetails.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="add-product-btn" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
