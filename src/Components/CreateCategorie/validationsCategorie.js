export const validateFormC = (formData) => {
    const errors = {};
  
    if (!formData.name) {
      errors.name = "El nombre es obligatorio.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "El nombre debe contener solo letras y espacios.";
    }
  
    return errors;
  };