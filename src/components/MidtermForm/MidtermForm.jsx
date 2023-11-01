import React, { useState } from 'react';
import Controlled from '../Controlled/Controlled';
import { validateForm } from '../Validate/Validate';
import './midtermForm.css';

const MidtermForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm(formData);

    if (validationError) {
      setError(validationError);
    } else {
      alert(`New Product Information:
      Name: ${formData.name}
      Description: ${formData.description}
      Category: ${formData.category}
      Quantity: ${formData.quantity}
      Price: $${formData.price}`);

      setFormData({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
      });

      setError('');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });
    setError('');
  };

  return (
    <div>
      <h3>New Product</h3>
      <form onSubmit={handleSubmit}>
        <Controlled formData={formData} handleInputChange={handleInputChange} />
        <div className="myButtons" >
          <button  className="submitButton" type="submit">Submit</button>
          <button className="cancelButton" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {error && <p className="errorText" style={{ color: 'red', fontWeight: 'bold'}}>{error}</p>}
    </div>
  );
};

export default MidtermForm;
