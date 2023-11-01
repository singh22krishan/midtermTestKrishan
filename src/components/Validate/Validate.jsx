export const validateForm = (formData) => {
    if (
      formData.name === '' ||
      formData.description === '' ||
      formData.category === '' ||
      formData.quantity <= 0 ||
      formData.price <= 0
    ) {
      return 'Please fill in all fields, and ensure quantity and price are positive.';
    }
    return null;
  };
  