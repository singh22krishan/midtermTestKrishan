import React from 'react';
import './controlled.css';

const Controlled = ({ formData, handleInputChange }) => {
  return (
    <div className="controlled-container">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default Controlled;
