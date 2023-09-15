export const isAlpha = (text) => /^[A-Za-z]+$/.test(text);
export const isNumeric = (text) => /^\d+$/.test(text);

export const validateForm = (formData) => {
  const errors = {};

  if (!isAlpha(formData.name)) {
    errors.name = "El nombre solo debe contener letras.";
  }

  if (!isNumeric(formData.price)) {
    errors.price = "El precio debe ser un número.";
  }

  if (!formData.size) {
    errors.size = "Debes seleccionar un tamaño.";
  }

  if (formData.stock === "" || parseInt(formData.stock) < 1) {
    errors.stock = "El stock debe ser mayor que 0.";
  }
  if (formData.image && !/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i.test(formData.image)) {
    errors.image = "Debe ser una URL válida de imagen (png, jpg, jpeg, gif)."  ;
  }

  return errors;
};
 
  
  
    
