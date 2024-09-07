import React, { useState } from 'react';
import './ProductPage.css'; // Ensure this path is correct

// Sample product details. In a real application, you would fetch this from an API or state.
const product = {
  id: 1,
  name: 'Sample Product',
  description: 'This is a detailed description of the sample product.',
  price: 29.99,
  imageUrl: '/images/PROD.jpg', // Replace with your image path
  availableSizes: ['S', 'M', 'L', 'XL'],
  availableColors: ['Red', 'Blue', 'Green'],
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    // Here you would handle adding the product to the cart, such as updating global state or local storage
    alert(`Added ${quantity} ${product.name}(s) in ${selectedSize} size and ${selectedColor} color to cart.`);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="options">
          <label>
            Size:
            <select value={selectedSize} onChange={handleSizeChange}>
              {product.availableSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>
          <label>
            Color:
            <select value={selectedColor} onChange={handleColorChange}>
              {product.availableColors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="quantity">
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </label>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
